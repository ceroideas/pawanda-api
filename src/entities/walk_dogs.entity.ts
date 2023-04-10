import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import Dogs from './dogs.entity';
import Walks from './walks.entity';

@Entity()
export default class WalksDogs {
  @Column({ nullable: true })
  walksId: number;

  @Column({ nullable: true })
  dogsId: number;
}
