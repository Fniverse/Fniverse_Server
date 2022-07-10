import { PerfumeReview } from './PerfumeReview.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PerfumeReviewLike {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PerfumeReview)
  perfumeReview: PerfumeReview;

  @Column({ nullable: false })
  perfumeReviewId: number;

  @Column({ nullable: false })
  userId: number;
}
