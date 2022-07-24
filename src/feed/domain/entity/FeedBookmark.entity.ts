import { Feed } from './Feed.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeedBookmark {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Feed)
  feed: Feed;

  @Column({ nullable: false })
  feedId: number;

  @Column({ nullable: false })
  userId: number;
}
