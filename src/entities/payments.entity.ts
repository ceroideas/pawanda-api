import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Users from './user.entity';
import Walks from './walks.entity';

@Entity()
export default class Payments {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Walks, (walk) => walk.payment)
  @JoinColumn()
  walk: number | Walks;

  @Column({ nullable: true })
  amount: number;

  @ManyToOne(() => Users, (user) => user.id)
  user: number | Users;

  @Column({ type: 'datetime', nullable: true })
  date: Date;

  @Column({ nullable: true })
  status: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
