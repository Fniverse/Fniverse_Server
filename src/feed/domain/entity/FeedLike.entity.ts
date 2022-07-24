import { Feed } from './Feed.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeedLike {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Feed)
  feed: Feed;

  @Column({ nullable: false })
  feedId: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false, default: 0 })
  count: number;
}
