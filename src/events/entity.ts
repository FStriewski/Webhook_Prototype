import { BaseEntity, ManyToOne, OneToMany, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Exclude } from 'class-transformer';
import { IsString, IsUrl, IsBoolean, IsArray } from 'class-validator'
import {Target} from '../webhooks/entity'

@Entity()
export class Events extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('integer')
    statuscode: number

    @Column('simple-json', { nullable: true })
    eventbody: {eventname: string, data: string}

    @ManyToOne(_ => Target, target => target.events)
    target: Target
}

