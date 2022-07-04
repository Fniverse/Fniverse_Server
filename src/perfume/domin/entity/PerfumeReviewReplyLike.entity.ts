import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PerfumeReviewReply } from './PerfumeReviewReply.entity';

@Entity()
export class PerfumeReviewReplyLike {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PerfumeReviewReply)
  perfumeReviewReply: PerfumeReviewReply;

  @Column({ nullable: false })
  perfumeReviewReplyId: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false, default: 0 })
  count: number;
}
