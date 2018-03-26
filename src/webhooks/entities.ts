import { BaseEntity, ManyToOne, OneToMany, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Exclude } from 'class-transformer';
import { IsString, IsUrl, IsBoolean } from 'class-validator'

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

    @OneToMany(_ => Subscription, subscription => subscription.target)
    subscriptions: Subscription[]

}
// Event that is forwards to URL
// Post to here should be rerouted
// Post route for /events that forwards the right events to the webhooks/targetUrls

// Receive events

@Entity()
export class Subscription extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @Column('text')
    name: string

    // @Column('text')
    // id?: number

    @ManyToOne(_ => Target, target => target.subscriptions, {eager: true})
    target: Target

}
