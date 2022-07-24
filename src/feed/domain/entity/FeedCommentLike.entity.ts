import { FeedComment } from './FeedComment.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeedCommentLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  userId: number;

  @ManyToOne(() => FeedComment)
  feedComment: FeedComment;

  @Column({ nullable: false })
  feedCommentId: number;

  @Column({ nullable: false, default: 0 })
  count: number;
}
