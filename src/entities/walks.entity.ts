import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Walks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  user_id: number;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  lat: string;

  @Column({ nullable: true })
  lon: string;

  @Column({ nullable: true })
  hour_from: string;

  @Column({ nullable: true })
  hour_to: string;

  @Column({ nullable: true })
  days: string;

  @Column({ type: 'datetime', nullable: true })
  date: Date;

  @Column({ nullable: true })
  repeat: number;

  @Column({ nullable: true })
  repeat_to: number;

  @Column({ nullable: true })
  status: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
