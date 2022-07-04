import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PerfumeReviewReplyLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  perfumeReviewReplyId: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false, default: 0 })
  count: number;
}
