import { Feed } from './Feed.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeedReport {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Feed)
  feed: Feed;

  @Column({ nullable: false })
  feedId: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false, default: '' })
  desc: string;
}
