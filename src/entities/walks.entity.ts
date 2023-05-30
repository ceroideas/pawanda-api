import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Dogs from './dogs.entity';
import Payments from './payments.entity';
import Users from './user.entity';

@Entity()
export default class Walks {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.id, { cascade: true })
  user: number | Users;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  lat: string;

  @Column({ nullable: true })
  lon: string;

  @Column({ nullable: true })
  hour_from: string;

  @ManyToMany(() => Dogs, (dog) => dog.walk)
  @JoinTable({ name: 'walks_dogs' })
  dog: number | Dogs[] | Dogs | number[];

  @Column({ nullable: true })
  hour_to: string;

  @Column({ nullable: true })
  days: string;

  @OneToOne(() => Payments, (payment) => payment.walk, { cascade: true })
  payment: number | Walks;

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

  @Column({ nullable: false })
  userId: number;
}
