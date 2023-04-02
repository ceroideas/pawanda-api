import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Bank_datas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  user_id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  iban: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  address_2: string;

  @Column({ nullable: true })
  postal_code: string;

  @Column({ nullable: true })
  city: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
