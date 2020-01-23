import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AuthModule } from './auth.module';
import { UsersModule } from './users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
