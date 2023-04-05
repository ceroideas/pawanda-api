import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import Users from './user.entity';

@Entity()
export default class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Users, (user) => user.profile)
  user: Users;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  postal_code: number;

  @Column({ nullable: true })
  lat: string;

  @Column({ nullable: true })
  lon: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
