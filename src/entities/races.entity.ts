import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Dogs from './dogs.entity';

@Entity()
export default class Races {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  status: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
