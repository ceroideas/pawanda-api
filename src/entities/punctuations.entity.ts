import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Dogs from './dogs.entity';
import Users from './user.entity';

@Entity()
export default class Punctuations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  type: number;

  @Column({ nullable: true })
  punctuation: number;

  @Column({ nullable: true })
  comment: string;

  @ManyToOne(() => Dogs, (dog) => dog.id)
  dog: number | Dogs;

  @ManyToOne(() => Users, (user) => user.id)
  user: number | Users;

  @ManyToOne(() => Users, (user) => user.id)
  walker: number | Users;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
