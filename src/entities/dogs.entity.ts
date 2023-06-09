import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Punctuations from './punctuations.entity';
import Races from './races.entity';
import Users from './user.entity';
import Walks from './walks.entity';

// async getUsersWithRole(roleName: string): Promise<User[]> {
//   const usersWithRole = await this.userRepository
//     .createQueryBuilder('user')
//     .leftJoinAndSelect('user.roles', 'role')
//     .where('role.name = :roleName', { roleName })
//     .getMany();
//   return usersWithRole;
// }
// }

@Entity()
export default class Dogs {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Races, (race) => race.id)
  // race: string | Races;


  @Column({ nullable: true })
  race: string;


  @Column({ nullable: true })
  photo_1: string;

  @Column({ nullable: true })
  photo_2: string;

  @Column({ nullable: true })
  photo_3: string;

  @ManyToMany(() => Walks, (walk) => walk.dog, { cascade: true })
  walk: number | Walks[] | Walks | number[];

  @Column({ nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  comments: string;

  @ManyToOne(() => Users, (user) => user.id, { cascade: true })
  user: number | Users;

  @Column({ type: 'boolean', nullable: true, default: false })
  pp: boolean;

  @Column({ nullable: true })
  size: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: false })
  userId: number;
}
