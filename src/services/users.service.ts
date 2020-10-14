import { Injectable } from '@nestjs/common';
import { UsersEntity } from '../entities/users.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class UsersService {
  async findOne(identifier: string) {
    const user = await getRepository(UsersEntity)
      .createQueryBuilder('user')
      .select([
        'user.id',
        'user.login',
        'user.displayName',
        'user.role',
        'user.locale',
        'user.realm',
        'user.hashedPassword',
        'user.salt',
        'user.isBanned',
        'user.isDonator'
      ])
      .where('login = :identifier', { identifier })
      .orWhere('email_backup = :identifier', { identifier })
      .getOne();
    return user;
  }
}
