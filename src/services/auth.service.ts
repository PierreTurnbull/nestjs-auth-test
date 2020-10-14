import { Injectable } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { md5 } from 'src/tools/md5';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(identifier: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(identifier);
    if (!user) { return null }
    const saltedPassword = user.salt.substr(0, 4) + pass + user.salt.substr(4)
    const passwordIsCorrect = md5(saltedPassword) === user.hashedPassword
    console.log(user, saltedPassword, passwordIsCorrect)
    return passwordIsCorrect ? user : null
  }
}