import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum Gender {
  MAN = 'MAN',
  WOMAN = 'WOMAN',
}

enum Vender {
  NAVER = 'NAVER',
  KAKAO = 'KAKAO',
  APPLE = 'APPLE',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  age: number;

  @Column({ type: 'enum', enum: Gender, nullable: false })
  gender: Gender;

  @Column({ type: 'enum', enum: Vender, nullable: false })
  vender: Vender;

  @Column('simple-array')
  note: string[];

  @CreateDateColumn()
  dt: Date;
}
