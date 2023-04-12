import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Users from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(req) {
    const user = await this.userRepository.findOne({
      where: { id: req.user.id },
      select: ['id', 'name', 'email', 'createdAt', 'phone', 'photo', 'status'],
    });
    return user;
  }

  async update(id: number, body) {
    const user = await this.userRepository.save({ id, ...body });
    return user;
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
    throw new HttpException('The User was eliminated', HttpStatus.OK);
  }
}
