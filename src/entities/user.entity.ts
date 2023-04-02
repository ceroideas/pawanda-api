import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ nullable: true })
  status: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
