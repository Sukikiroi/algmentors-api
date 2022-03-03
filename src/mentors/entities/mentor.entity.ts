import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Mentor {

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
}
