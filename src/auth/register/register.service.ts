import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Users from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { hashpassword } from '../encryptPassword/hash-and-compare';
import { UserRegisterDto } from './dto/create-register.dto';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async registerUser(user: UserRegisterDto) {
    try {
      const { password, email } = user;

      const userExist = await this.userRepository.findOne({ where: { email } });

      if (userExist)
        throw new HttpException(
          'El email ya esta en uso',
          HttpStatus.FORBIDDEN,
        );

      const hashPassword = await hashpassword(password);

      user = { ...user, password: hashPassword, provider: 'local' };

      const newUser = await this.userRepository.save(user);

      newUser.password = '';

      return newUser;
    } catch (error) {
      return error;
    }
  }
}
