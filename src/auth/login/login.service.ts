import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import Users from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { comparePassword } from '../encryptPassword/hash-and-compare';
import { LoginDto } from './dto/create-login.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  async login(login: LoginDto) {
    const { password, email } = login;

    console.log(password, email);

    try {
      const isUser = await this.userRepository.findOne({ where: { email } });
      const passwordIsCorrect = await comparePassword(
        password,
        isUser.password,
      );

      if (!isUser)
        throw new HttpException(
          'EMAIL OR PASSWORD IS NOT VALID',
          HttpStatus.NOT_FOUND,
        );
      if (!passwordIsCorrect)
        throw new HttpException(
          'EMAIL OR PASSWORD IS NOT VALID',
          HttpStatus.BAD_REQUEST,
        );

      const payload = { id: isUser.id };
      const token = this.jwtService.sign(payload);

      delete isUser['password'];

      const data = {
        user: isUser,
        token: token,
      };

      return data;
    } catch (error) {
      Logger.log('ERROR in login.service.login ', error);

      return error;
    }
  }

  async socialLogin(login) {
    const { email } = login.user;

    try {
      const isUser = await this.userRepository.findOne({ where: { email } });

      if (!isUser)
        throw new HttpException('EMAIL IS NOT VALID', HttpStatus.NOT_FOUND);

      const payload = { id: isUser.id };
      const token = this.jwtService.sign(payload);

      delete isUser['password'];

      const data = {
        user: isUser,
        token: token,
      };

      return data;
    } catch (error) {
      Logger.log('ERROR in login.service.login ', error);

      return error;
    }
  }
}
