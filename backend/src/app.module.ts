import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';

@Module({
    // forRoot: 설정을 넣어주기 위해서...
    imports: [
      ConfigModule.forRoot({ isGlobal: true }), 
      UsersModule,
      WorkspacesModule,
      ChannelsModule,
      DmsModule],
    controllers: [AppController],
    providers: [AppService],

    // 원형
    // providers: [
    //   {
    //     provide: AppService, // 고유한키
    //     useClass: AppService,
    //   },
    // ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
