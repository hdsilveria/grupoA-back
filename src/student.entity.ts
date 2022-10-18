import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ra: number

    @Column()
    cpf: number

    @Column()
    name: string

    @Column()
    email: string
}