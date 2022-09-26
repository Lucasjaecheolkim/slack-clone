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


## 인터셉터
### src/common/interceptors/undefinedtoNull.interceptor.ts
```bash
    소스참조
```
* 요청이나 응답에 대한 공통적인 작업을 인터셉터에서 처리
* 에러는 expectionFilter에서 처리할 것
* 적용은 @UseInterceptor(인터셉터)



# 섹션2 (ch2 폴더)

강좌에 나오는 typeorm-model-generator를 쓰시지 마시고 nest-typeorm 폴더의 src/entities를 그냥 복사해서 src 폴더에 붙여넣으세요.

* ORM은 실제 DB 테이블을 자바스크립트 객체와 연결해주는 역할
* @Entity: 해당 클래스가 Entity 역할을 함을 나타냄(Entity는 엄밀히는 테이블과 다르지만 여기서는 테이블과 1대1 대응이라고 생각해도 됨)
* @Index: 테이블에 적용된 index 목록들(성능 향상 목적)
* @PrimaryGeneratedColumn: 프라이머리키
* @Column: 컬럼의 타입과 설정(대문자 컬럼명을 자바스크립트 속성으로 매핑)
* @CreateDateColumn: createdAt은 이걸로 바꿀 것(생성 시 시간 자동 부여)
* @UpdateDateColumn: updatedAt은 이걸로 바꿀 것(수정 시 시간 자동 부여)
* @DeleteDateColumn: deletedAt은 이걸로 바꿀 것(수정 시 시간 자동 부여)
  - softDelete용(나중에 복원을 위해)
* Entity 컬럼에도 @Api... 스웨거 데코레이터를 붙일 수 있음


## 관계
* 테이블간에는 관계가 있음(워크스페이스에 소속된 채널, 워크스페이스에 소속된 사람)
* 말로 표현해보면 어떤 관계인지 알 수 있음
* @ManyToMany: 워크스페이스 하나에 여러 사람 소속 가능. 한 사람이 여러 워크스페이스에 소속 가능. 따라서 다대다
  - 다대다는 1대다 테이블 두개로 나눌 수 있음. 대신 중간 테이블이 생김(Workspace와 User는 다대다이지만 Workspace-WorkspaceMember, WorkspaceMember-User로 분해 가능)
* @JoinTable: ManyToMany에서 하나의 엔티티에 중간 테이블 정보를 넣어줌
  - name: 중간 테이블 이름
  - joinColumn: 내 엔티티 정보
    - name: 중간 테이블에서 쓰일 내 엔티티 컬럼 이름
    - referencedColumnName: 내 엔티티 컬럼 이름
  - inverseJoinColumn: 상대 엔티티 정보
    - name: 중간 테이블에서 쓰일 상대 엔티티 컬럼 이름
    - referencedColumnName: 상대 엔티티 컬럼 이름
* @OneToMany: 일대다. 워크스페이스 하나에 여러 멤버가 소속 가능. 따라서 워크스페이스와 멤버는 일대다(사람과 워크스페이스멤버를 구분할 것)
  - 첫 번째 인자: () => 내 엔티티
  - 두 번째 인자: 상대 엔티티의 내 속성
  - 세 번째 인자: SQL 옵션(onDelete, onUpdate 등)
    - cascade: join된 테이블의 데이터까지 동시에 수정해야 할 때 해당 작업도 넣어야 함
* @ManyToOne: 다대일(일대다의 반대). 워크스페이스멤버와 워크스페이스는 다대일
* @OneToOne: 1대1 관계(강좌에는 없지만 사람과 개인정보의 관계 등)
* @JoinColumn: FK(외래키)가 있는 컬럼에 붙여줌
  - name: 현재 DB 컬럼 이름 (ex: WorkspaceId(채널 테이블))
  - referencedColumnName: 참조하는 테이블의 컬럼 이름 (ex: id(워크스페이스테이블))

![ERD 링크](../images/erdcloud.png)
* ddl을 추출해서 erdcloud에 넣으면 erd가 그려짐


## MySQL과 연결하기

```shell
npm i @nestjs/typeorm typeorm mysql2
```
* mysql이 아니면 mysql2 대신 각 db에 맞는 드라이버를 받아야함

src/app.module.ts에 TypeOrmModule.forRoot 작업
```
# 강좌 참조
```
* type: db 종류
* host: db 주소
* port: db포트(mysql은 보통 3306)
* username: db 사용자이름
* password: db 사용자 비번
* database: db 데이터베이스 이름
* entities: 만든 엔티티들 여기에 넣기
* autoLoadEntities: true면 TypeOrmModule.forFeature에 넣은 엔티티들은 자동 연결됨
* synchronize: true면 entity에 따라 실제 db 테이블 재생성(기존 테이블 다 날라가니 주의)
* logging: true면 typeorm이 만들어주는 쿼리가 콘솔에 표시(개발 시에는 켜두는 게 매우 유용)
* keepConnectionAlive: true여야 핫 리로딩시에도 db 연결이 끊어지지 않음
* charset: db의 언어 설정(utf8mb4로 할것)

ormConfig.ts를 따로 만들어서(package.json과 같은 위치에) import해서 쓰는 것도 괜찮음
* 그래야 나중에 seed나 migration 작업할 때 재사용 가능
* 다만 configService는 쓸 수 없음


## SCHEMA, 테이블 생성

mysql 프롬프트로 접속 후 sleact SCHEMA 생성
```shell
mysql -uroot -p디비비밀번호
```
* *mysql 명령어가 안 되면 mysql이 설치된 폴더로 이동해서 다시 실행
```
cd "c:\Program Files\MySQL\MySQL Server 8.0\bin"
mysql -uroot -p디비비밀번호
```
mysql prompt에서 다음 쿼리 수행
```
CREATE SCHEMA `sleact` DEFAULT CHARACTER SET utf8mb4;
exit;
```
* SCHEMA 생성 후 **synchronize: true**인 상태에서 서버 실행하면 테이블이 전부 생성됨
* 테이블 생성 후 synchronize: false로 돌려놓기


## 비동기 typeorm 연결 설정
TypeOrmModule.forRootAsync
* inject: [ConfigService]로 주입 가능
* useFactory의 매개변수로 configService 사용 가능
* process.env를 configService.get으로 대체


## Raw Query 날리기
```typescript
import { getManager } from 'typeorm';

const entitiyManager = getManager();
const someQuery = entitiyManager.query(`
  SELECT * FROM TABLE WHERE id = $1
`, [id]);
```


## seeding
typeorm-seeding 설치
```shell
npm i typeorm-seeding
npm i -D ts-node
```

package.json에 다음 줄 추가(json이므로 콤마 조심)
```bash
    "typeorm": "ts-node --require tsconfig-paths/register ./node_modules/typeorm/cli.js",
    "seed:config": "ts-node ./node_modules/typeorm-seeding/dist/cli.js config",
    "seed:run": "ts-node ./node_modules/typeorm-seeding/dist/cli.js seed",
    "schema:drop": "ts-node ./node_modules/typeorm/cli.js schema:drop",
    "schema:sync": "ts-node ./node_modules/typeorm/cli.js schema:sync",
    "db:migrate": "npm run typeorm migration:run",
    "db:migrate:revert": "npm run typeorm migration:revert",
    "db:create-migration": "npm run typeorm migration:create -- -n",
    "db:generate-migration": "npm run typeorm migration:generate -- -n"
```

src/database/seeds/create-initial-data.ts 작성
```bash
# 강좌 참조
```
시드 수행
```bash
npm run seed:run
```
실제 테이블에 데이터 생겼는지 항상 확인!


## migration
ormconfig.ts에 다음 줄 추가
```
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
```
직접 마이그레이션 작성하기
```
npm run db:create-migration 마이그레이션이름
```
자동으로 마이그레이션 생성하기
```
npm run db:generate-migration categoryToType
```
* 너무 typeorm을 믿지 말 것(특히 DROP 조심)

마이그레이션 수행
```
npm run db:migrate
```


## 회원가입 만들기

1. 터미널을 하나 더 씌워서 프론트 폴더 front로 이동
2. npm i로 설치
3. npm run dev로 실행
4. localhost:3090으로 접속해서 회원가입 요청 보내면 됨

src/users/dto/join.request.dto.ts 수정
```
# 강좌 참조
```
* PickType으로 다른 dto에서 특정 속성만 추출 가능

src/users/users.controller.ts, src/users/users.service.ts 수정
```
# 강좌 참조
```
* @InjectRepository(엔티티)로 typeorm 레포지토리 의존성 주입
* TypeOrmModule.forFeature([엔티티])로 주입 필요(UsersModule와 AppModule 둘 다)

비밀번호 암호화, 비교를 위해 bcrypt 설치
```shell
npm i bcrypt
```

포스트맨이든 localhost:3090 프론트앱이든으로 요청 보내보기

