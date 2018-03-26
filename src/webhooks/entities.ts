import { BaseEntity, ManyToOne, OneToMany, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Exclude } from 'class-transformer';

@Entity()
export class TargetURL extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    name: string

    @Column()
    active : boolean

    @Column('text')
    url: string

    @ManyToOne(_ => EventSubscription, e => e.urls)
    event: EventSubscription | null

}

@Entity()
export class EventSubscription extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    name: string

    // @Column('text')
    // id?: number

    @OneToMany(_=> TargetURL, t => t.event)
    urls: TargetURL[]

}
