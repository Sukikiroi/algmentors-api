import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Mentor } from 'src/mentors/entities/mentor.entity';
import { Student } from 'src/students/entities/student.entity';
@Entity()
export class Tuto {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  duree: number;

  @ManyToOne(() => Mentor, (mentor) => mentor.tutos)
  mentor: Mentor;

  @ManyToMany(() => Student, (student) => student.tutos)
  @JoinTable()
  students: Student[];
}
