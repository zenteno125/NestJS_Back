import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @Column()
    age: number;
    @Column()
    gender: string;
    @Column({nullable:false, default:false})
    isAdmin?: boolean;
    @Column({nullable:false, default:false})
    isSupport?: boolean;
    @Column({default:true})
    isActive: boolean;

}
