import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 3306),
        username: configService.get<string>('DB_USERNAME', 'root'),
        password: configService.get<string>('DB_PASSWORD', 'Lxx@1234'),
        database: configService.get<string>('DB_DATABASE', 'shadcn_admin'),
        // 在自定义 Provider 中，必须使用 glob pattern 来模拟 autoLoadEntities
        // 这里的路径需要根据实际编译后的结构调整，通常 src 目录下的实体在 dist 中结构一致
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, // 生产环境请关闭
      });

      // 手动实现重试逻辑
      const retryAttempts = 3;
      const retryDelay = 5000;

      for (let attempt = 0; attempt < retryAttempts; attempt++) {
        try {
          console.log(`Connecting to database (Attempt ${attempt + 1}/${retryAttempts})...`);
          return await dataSource.initialize();
        } catch (error) {
          console.error(`Database connection failed: ${error.message}`);
          if (attempt === retryAttempts - 1) {
            throw error; // 最后一次尝试失败，抛出异常
          }
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
      }
    },
  },
];
