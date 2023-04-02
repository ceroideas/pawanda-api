import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  name: number;

  @Column({ nullable: true })
  comments: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
