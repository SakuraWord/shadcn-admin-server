import { Module, Global } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { ConfigModule } from '@nestjs/config';

@Global() // 设为全局模块，这样其他模块（如 UserModule）无需再次导入即可使用 DATA_SOURCE
@Module({
  imports: [ConfigModule],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule { }
