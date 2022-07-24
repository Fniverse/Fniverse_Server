import { Feed } from './Feed.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeedImg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: 0 })
  feedId: number;

  @ManyToOne(() => Feed, (feed) => feed.imgs)
  feed: Feed;

  @Column({ nullable: false, default: '' })
  feedUrl: string;
}
