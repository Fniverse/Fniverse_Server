import { FeedReply } from './FeedReply.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeedReplyLike {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => FeedReply)
  feedReply: FeedReply;

  @Column({ nullable: false })
  feedReplyId: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false, default: 0 })
  count: number;
}
