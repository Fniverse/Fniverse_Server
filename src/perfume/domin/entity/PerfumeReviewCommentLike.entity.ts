import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PerfumeReviewComment } from './PerfumeReviewComment.entity';

@Entity()
export class PerfumeReviewCommentLike {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PerfumeReviewComment)
  perfumeReviewComment: PerfumeReviewComment;

  @Column({ nullable: false })
  perfumeReviewCommentId: number;

  @Column({ nullable: false })
  userId: number;
}
