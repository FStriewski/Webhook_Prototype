import { BaseEntity, ManyToOne, OneToMany, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Exclude } from 'class-transformer';

// Hook: URL that receives notification of Event
// Teacher side
@Entity()
export class Target extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    name: string

    @Column({nullable:true})
    active : boolean

    @Column('text')
    url: string

    @OneToMany(_ => EventSubscription, e => e.targetURL)
    event: EventSubscription[] | null

}
// Event that is forwards to URL
// Post to here should be rerouted
@Entity()
export class EventSubscription extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    name: string

    // @Column('text')
    // id?: number

    @ManyToOne(_ => Target, t => t.event, {eager: true})
    targetURL: Target

}
