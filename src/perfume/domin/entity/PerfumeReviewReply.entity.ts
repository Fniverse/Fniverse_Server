import { PerfumeReviewComment } from './PerfumeReviewComment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PerfumeReviewReply {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PerfumeReviewComment)
  perfumeReviewComment: PerfumeReviewComment;

  @Column({ nullable: false })
  perfumeReviewCommentId: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false })
  content: string;

  @CreateDateColumn()
  dt: Date;
}
