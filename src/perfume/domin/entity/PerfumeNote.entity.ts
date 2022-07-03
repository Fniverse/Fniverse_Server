import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PerfumeNote {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  top: string | null;

  @Column({ nullable: true })
  middle: string | null;

  @Column({ nullable: true })
  base: string | null;
}
