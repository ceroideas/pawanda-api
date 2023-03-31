import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { hashpassword } from '../encryptPassword/hash-and-compare';
import  {UserRegisterDto}  from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';

@Injectable()
export class RegisterService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>){

  }

  async registerUser(user: UserRegisterDto) {

    try {

      const {password, email} = user;

      const userExist = await this.userRepository.findOne({where: {email}})

      if(userExist) throw  new HttpException('EMAIL_IS_ALREADY_TAKE', 403);

      const hashPassword = await hashpassword(password)

      user = {...user, password: hashPassword}


      const newUser = await this.userRepository.save(user);

      newUser.password = '';
      
      return newUser ;
    } catch (error) {
      return error
    }

  }






















  findAll() {
    return `This action returns all register`;
  }

  findOne(id: number) {
    return `This action returns a #${id} register`;
  }

  update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return `This action updates a #${id} register`;
  }

  remove(id: number) {
    return `This action removes a #${id} register`;
  }
}
