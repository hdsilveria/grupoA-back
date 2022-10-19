import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        width: 150,
        type: 'bigint' 
    })
    ra: number

    @Column({
        width: 150,
        type: 'bigint'
    })
    cpf: number

    @Column()
    name: string

    @Column()
    email: string
}