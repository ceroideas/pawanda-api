import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Rooms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  history_id: number;

  @Column({ nullable: true })
  status: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
