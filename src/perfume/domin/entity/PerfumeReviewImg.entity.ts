import { PerfumeReview } from './PerfumeReview.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PerfumeReviewImg {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => PerfumeReview,
    (PerfumeReview) => PerfumeReview.perfumeReviewImgs,
  )
  perfumeReview: PerfumeReview;

  @Column({ nullable: false, default: 0 })
  perfumeReviewId: number;

  @Column({ nullable: false, default: '' })
  url: string;
}
