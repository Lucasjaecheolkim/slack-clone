# Slack 클론 코딩[백엔드 with NestJS + TypeORM]

# 첫번째 섹션

1. node 16.15.0
2. 노트북1 : 8.5.5 / 노트북2 : 8.12.*
3. mariaDB 10.7.3

```bash
$ npm install
$ node -v
$ npm -v
$ npm i -g @nestjs/cli
$ nest new back
$ cd back
$ npm run start
```

### hot reloading
```bash
$ npm i --save-dev webpack-node-externals run-script-webpack-plugin webpack
$ npm run start:dev
```

### webpack-hmr.config.js 추가
```bash
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeExternals = require('webpack-node-externals');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: options.output.filename }),
    ],
  };
};
```

### package.json
```bash
"start:dev": "nest build --webpack --webpackPath webpack-hmr.config.js --watch"
```
```bash
$ npm run start:dev
```
* nest@8 사용 시 핫 리로딩 버그 없음

### src/main.ts
```bash
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`listening on port ${port}`);

    if (module.hot){
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
```

### tsconfig.json에 다음 한 줄 넣어두기
```bash
    "esModuleInterop": true,
```

### 컨트롤러와 서비스

* @Controller와 @Get(또는 @Post @Put @Delete 등) 의 주소가 합쳐짐
* Controller 만든 것은 Module의 controllers 배열에 추가해야함
* Service는 req와 res에 대해 몰라야함. 만들고자 하는 서비스에 대한 로직만 있어야 함.
* Controller도 웬만하면 req, res에 대해 모르면 좋음. 나중에 테스트 시 가짜 req, res를 컨트롤러에 넣을 수 있음

### Configuration
```bash
$ npm i --save @nestjs/config
```

### dotenv
* src/app.module.ts
* ConfigService 활용에 대해서 체크
```bash
    import { ConfigModule, ConfigService } from '@nestjs/config';
    ...
    imports: [ConfigModule.forRoot()],
    controllers: [AppController],
    providers: [AppService, ConfigService],
```

* src/app.service.ts
```bash
    import {ConfigService} from "@nestjs/config";

    export class AppService {
        constructor(private configService: ConfigService) {}
        getHello(): string {
            return this.configService.get('SELECT'); // 정말로...
        }
    }
```
### 심화과정
ConfigModule.forRoot에 isGlobal: true를 하면 전역 설정이 됨(추후 ConfigModule 넣을 필요 없음)
load에 함수를 넣으면 return 값이 설정이 됨(비동기도 지원해서 보통 여기서 외부 env들을 가져와서 return함);

### src/middlewares/logger.middlewares.ts
```bash
    소스참조
```
* use 부분은 요청 시에
* response.on('finish') 부분은 응답 후에 찍힘
* next 꼭 넣기

### src/app.module.ts
```bash
import { MiddlewareConsumer, Module } from '@nestjs/common';
...
import { LoggerMiddleware } from './middlewares/logger.middleware';
...
export class AppModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
```

### DI
* @Injectable과 provider 기억하기
* @Module의 provider에 들어있는 것이 constructor에 주입됨. 마법이 아님!
* 나중에 provider만 바꾸면 주입되는 것을 자유자재로 바꿀 수 있음(테스트 시 유용)
* providers의 원형 기억하기(provide와 useClass, useValue, useFactory 등)
* class는 클래스 이름 자체가 token이고, 클래스가 아닌 경우에는 @Inject(토큰)로 provide의 값과 일치해야 함



# API 설계하기

### back 폴더 안에서 명령어 입력(모듈 만드는 명령)
* src/app.module.ts와 연결되었는지 확인할 것
```bash
$ nest g mo users
$ nest g mo workspaces
$ nest g mo channels
$ nest g mo dms
```

### 서비스(s), 컨트롤러(co) 만드는 명령
* src/users/users.module.ts와 연결되었는지 확인할 것
```bash
$ nest g s users
$ nest g co users
```

### src/users/users.controller.ts, src/users/users.service.ts
```bash
    소스참조
```
* @Req(요청), @Res(응답) 객체 접근 가능, but 안 쓰는게 좋음
* @Body(): req.body와 동일
* 요청에 관한 데이터는 dto로 만들어둠

### src/users/dto/join.request.dto.ts
```bash
    소스참조
```
* @Param(): req.params와 동일 (url에서 :가 붙은 변수)
* @Query(): req.query와 동일 (?a=b 같은 쿼리스트링)

```bash
$ nest g s dms && nest g co dms
$ nest g s channels && nest g co channels
$ nest g s workspaces && nest g co workspaces
```


## swagger

* http://localhost:3000/api/#/
### src/main.ts
```bash
    const config = new DocumentBuilder()
        .setTitle('Sleact API')
        .setDescription('Sleact 개발을 위한 API 문서입니다.')
        .setVersion('1.0')
        .addCookieAuth('connect.sid')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
```

```bash
$ npm i @nestjs/swagger swagger-ui-express
//$ npm install --save @nestjs/swagger swagger-ui-express
```

### src/users/dto/join.request.dto, src/users/users.controller.ts, src/dms/dms.controller.ts
```bash
    소스참조
```
* @ApiOperation({ summary: '라우터 설명' })
* @ApiProperty(): 속성에 대한 설명, 예시, 기본값, 필수 여부 등
* @ApiQuery(): 쿼리스트링에 대한 설명, 예시, 기본값, 필수 여부 등
* @ApiParam(): 주소 변수에 대한 설명, 예시, 기본값, 필수 여부 등
* @ApiTags(): Swagger문서 카테고리 이름
* @ApiResponse(): 응답값에 대한 타이핑, code별로 여러 개 붙일 수 있음

### src/common/dto/user.dto.ts
```bash
    소스참조
```
* 다른 dto를 extends 할 수 있음
* 다른 dto에서 일부만 빼올 수 있음(섹션 3에 나옴)


## 커스텀 데코레이터 만들기
### src/common/user.decorator.ts
```bash
    소스참조
```
* 앞으로 @User() 데코레이터 사용 가능(req.user 대체)
* 비슷하게 @Token() 같은 것도 만들 수 있음
* 혹시나 기반 프레임워크가 달라지더라도 req.user를 모두 찾아 바꾸는 게 아니라 데코레이터만 바꿔도 돼서 편리함
* ctx.switchToHttp()가 있는데 혹시나 서비스가 웹소켓 기반으로 바뀌면 ctx.switchToWs()로 쉽게 바꿀 수 있음




