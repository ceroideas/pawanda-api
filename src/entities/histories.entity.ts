import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Histories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  walk_id: number;

  @Column({ nullable: true })
  user_id: number;

  @Column({ nullable: true })
  walker_id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
