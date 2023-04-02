import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Messages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  room_to: number;

  @Column({ nullable: true })
  user_from: number;

  @Column({ nullable: true })
  user_to: number;

  @Column({ nullable: true })
  messages: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
