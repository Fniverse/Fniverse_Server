import { Perfume } from './Perfume.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class PerfumeImg {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: false, default: 0 })
  perfumeId: number;

  @ManyToOne(() => Perfume, (perfume) => perfume.imgs)
  perfume: Perfume;

  @Column({ nullable: false, default: '' })
  perfumeUrl: string;
}
