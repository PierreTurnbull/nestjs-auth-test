import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log(user)
    if (user && user.hashedPassword === pass) {
      const { hashedPassword, ...result } = user;
      return result;
    }
    return null;
  }
}