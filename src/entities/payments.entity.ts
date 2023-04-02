import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Payments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  walk_id: number;

  @Column({ nullable: true })
  amount: number;

  @Column({ nullable: true })
  user_id: number;

  @Column({ type: 'datetime', nullable: true })
  date: Date;

  @Column({ nullable: true })
  status: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
