import { Perfume } from './Perfume.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class PerfumeReview {
  @PrimaryColumn()
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
}
