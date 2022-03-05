import {Entity, PrimaryGeneratedColumn, Column,OneToMany} from "typeorm";
import { Tuto } from "src/tutos/entities/tuto.entity";
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

    @OneToMany(() => Tuto, tuto => tuto.mentor)
    tutos: Tuto[];
    
}
