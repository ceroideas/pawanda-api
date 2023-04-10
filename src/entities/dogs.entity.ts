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
import WalkDogs from './walk_dogs.entity';

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

  @Column({ nullable: true })
  @ManyToOne(() => Races, (race) => race.id)
  race: string;

  @ManyToMany(() => Walks)
  @JoinTable({ name: 'walks_dogs' })
  walk: number | Walks[] | Walks;

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
  user: number | Users;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
