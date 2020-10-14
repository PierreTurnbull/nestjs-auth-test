import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'login' })
  username: string;

  @Column({ name: 'display' })
  displayName: string;

  @Column()
  role: number;

  @Column({ name: 'lang' })
  locale: string;

  @Column()
  realm: string;

  @Column({ name: 'email_backup' })
  email: string;

  @Column({ name: 'password' })
  hashedPassword: string;

  @Column({ name: 'password_salt' })
  salt: string;

  @Column({ name: 'banned_login' })
  isBanned: boolean;

  @Column({ name: 'donator' })
  isDonator: boolean;
}
