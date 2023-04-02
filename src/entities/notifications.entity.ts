import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Notifications {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  message: string;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  info: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
