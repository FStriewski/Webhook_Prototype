import { BaseEntity, ManyToOne, OneToMany, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Exclude } from 'class-transformer';
import { IsString, IsUrl, IsBoolean, IsArray } from 'class-validator'

// Hook: URL that receives notification of Event
// Teacher side
// Event is triggered send sth to Subscribers

@Entity()
export class Target extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @Column('text')
    name: string

    @Column({ nullable: true, default: true})
    active : boolean

    @IsUrl()
    @Column('text')
    url: string

    @IsArray()
    @Column('simple-array')
    events: string[]

}