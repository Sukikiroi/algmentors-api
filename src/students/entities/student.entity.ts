import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Tuto } from 'src/tutos/entities/tuto.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;

  @Column()
  bio: string;

  @ManyToMany(() => Tuto, (tuto) => tuto.students)
  @JoinTable()
  tutos: Tuto[];
}
