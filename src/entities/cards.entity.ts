import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Users from './user.entity';

@Entity()
export default class Cards {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.id, { cascade: true })
  user: number | Users;

  @Column({ nullable: true })
  alias: string;

  @Column({ nullable: true })
  token: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
