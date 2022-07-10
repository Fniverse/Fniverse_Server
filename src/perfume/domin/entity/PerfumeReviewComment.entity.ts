import { PerfumeReview } from './PerfumeReview.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PerfumeReviewComment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PerfumeReview)
  perfumeReview: PerfumeReview;

  @Column({ nullable: false })
  perfumeReviewId: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false, default: '' })
  content: string;

  @CreateDateColumn()
  dt: Date;
}
