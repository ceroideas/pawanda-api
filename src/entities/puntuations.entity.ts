import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Puntuations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  type: number;

  @Column({ nullable: true })
  puntuations: string;

  @Column({ nullable: true })
  comment: string;

  @Column({ nullable: true })
  dog_id: number;

  @Column({ nullable: true })
  user_id: number;

  @Column({ nullable: true })
  walker_id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
