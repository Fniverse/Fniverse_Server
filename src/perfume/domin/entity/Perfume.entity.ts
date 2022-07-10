import { PerfumeNote } from './PerfumeNote.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PerfumeImg } from './PerfumeImg.entity';

export enum Gender {
  MAN = 'MAN',
  WOMAN = 'WOMAN',
  UNISEX = 'UNISEX',
}

@Entity()
export class Perfume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: '' })
  name: string;

  @Column({ nullable: false, default: '' })
  engName: string;

  @Column({ nullable: false, default: '' })
  brand: string;

  @Column({ nullable: false, default: '' })
  engBrand: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: false, default: '' })
  desc: string;

  @Column({ type: 'enum', enum: Gender, default: Gender.UNISEX })
  gender: Gender;

  @Column({ nullable: false, default: 0 })
  price: number;

  @OneToOne(() => PerfumeNote, { nullable: false })
  @JoinColumn()
  note: PerfumeNote;

  @OneToMany(() => PerfumeImg, (img) => img.perfume)
  imgs: PerfumeImg[];
}
