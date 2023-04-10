import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import Users from './user.entity';

@Entity()
export default class Disponibilities {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.id)
  user: number | Users;

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
  radius: number;

  @Column({ nullable: true })
  status: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
