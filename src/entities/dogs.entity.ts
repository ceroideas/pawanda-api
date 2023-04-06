import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Users from './user.entity';

@Entity()
export default class Dogs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  race_id: number;

  @Column({ nullable: true })
  photo_1: string;

  @Column({ nullable: true })
  photo_2: string;

  @Column({ nullable: true })
  photo_3: string;

  @Column({ nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  comments: string;

  @ManyToOne(() => Users, (user) => user.id)
  user: Users | string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
