import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/create-login.dto';


@Injectable()
export class LoginService {
  create(createLoginDto: LoginDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }



  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
