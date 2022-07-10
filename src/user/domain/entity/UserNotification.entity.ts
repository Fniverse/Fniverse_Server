import { User } from './User.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserNotification {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, { nullable: false })
  user: User;

  @Column({ nullable: false })
  userId: string;

  @Column({ nullable: false })
  push: boolean;

  @Column({ nullable: false })
  sms: boolean;

  @CreateDateColumn()
  dt: Date;
}
