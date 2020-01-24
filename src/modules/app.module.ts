import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controllers/app.controller';
import { UsersModule } from './users.module';
import { AuthModule } from './auth.module';

const isProd = process.env.NODE_ENV === 'production';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      logging: !isProd,
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
