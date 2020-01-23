import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UsersModule } from './users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../tools/local.strategy';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
