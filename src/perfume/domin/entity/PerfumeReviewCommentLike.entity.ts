import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PerfumeReviewCommentLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  perfumeReviewCommentId: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false, default: 0 })
  count: number;
}
