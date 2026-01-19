import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Lxx@1234',
      database: 'shadcn_admin',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // 不可在生产中使用，否则可能丢失数据
      retryDelay: 5000, // 断连时间后重试
      retryAttempts: 3, // 重联次数
      autoLoadEntities: true,   // 自动加载实体类
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
