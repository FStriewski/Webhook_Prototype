import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Exclude } from 'class-transformer';

@Entity()
export default class Test extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    test: string

}
