import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Default extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number

    @CreateDateColumn()
    created_at:Date


    @UpdateDateColumn()
    updated_at:Date

}