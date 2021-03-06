import { Perfume } from './Perfume.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PerfumeReviewImg } from './PerfumeReviewImg.entity';

@Entity()
export class PerfumeReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: '' })
  content: string;

  @Column({ nullable: false, default: '' })
  title: string;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false })
  perfumeId: number;

  @ManyToOne(() => Perfume, { nullable: false })
  perfume: Perfume;

  @OneToMany(() => PerfumeReviewImg, (img) => img.perfumeReview)
  perfumeReviewImgs: PerfumeReviewImg[];
}
