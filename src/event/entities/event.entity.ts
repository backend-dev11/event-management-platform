// src/events/event.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Event {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    eventName: string;

    @Column({ type: 'date' })
    eventDate: Date;

    @Column()
    organizer: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column('jsonb', { nullable: true })
    location: {
        street?: string;
        city?: string;
        state?: string;
        zip?: string;
    };

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
