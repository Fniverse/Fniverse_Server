import { FeedImg } from './FeedImg.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Category {
  TIMELINE = 'TIMELINE',
  RECOMMEND = 'RECOMMEND',
  NEW = 'NEW',
  TODAY = 'TODAY',
  CART = 'CART',
}

@Entity()
export class Feed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'enum',
    enum: Category,
    default: Category.TIMELINE,
  })
  category: Category;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false, default: '' })
  description: string;

  @Column({ nullable: false })
  userId: number;

  @CreateDateColumn()
  dt: Date;

  @OneToMany(() => FeedImg, (img) => img.feed)
  imgs: FeedImg[];
}
