import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PerfumeNote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  top: string | null;

  @Column({ nullable: true })
  middle: string | null;

  @Column({ nullable: true })
  base: string | null;
}
