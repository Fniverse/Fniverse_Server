import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PerfumeReviewLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  perfumeReviewId: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false, default: 0 })
  count: number;
}
