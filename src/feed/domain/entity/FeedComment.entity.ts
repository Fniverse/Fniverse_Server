import { Feed } from './Feed.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class FeedComment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Feed)
  feed: Feed;

  @Column({ nullable: false })
  feedId: number;

  @Column({ nullable: false, default: '' })
  content: string;

  @Column({ nullable: false })
  userId: number;

  @CreateDateColumn()
  dt: Date;
}
