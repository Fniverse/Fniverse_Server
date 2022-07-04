import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PerfumeReviewReply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  perfumeReviewCommentId: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false })
  content: string;

  @CreateDateColumn()
  dt: Date;
}
