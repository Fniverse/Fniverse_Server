import { FeedComment } from './FeedComment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class FeedReply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  userId: number;

  @ManyToOne(() => FeedComment)
  feedComment: FeedComment;

  @Column({ nullable: false })
  feedCommentId: number;

  @Column({ nullable: false, default: '' })
  content: string;

  @CreateDateColumn()
  dt: Date;
}
