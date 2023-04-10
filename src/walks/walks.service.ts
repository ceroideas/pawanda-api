import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Walks from 'src/entities/walks.entity';
import { Repository } from 'typeorm';
import { CreateWalkDto } from './dto/create-walk.dto';
import { UpdateWalkDto } from './dto/update-walk.dto';

@Injectable()
export class WalksService {
  constructor(
    @InjectRepository(Walks) private walkRepository: Repository<Walks>,
  ) {}

  create(walk: any, req) {
    walk.user = req.user.id;
    const walkCreate = this.walkRepository.save(walk);

    return walkCreate;
  }

  async findAll(req) {
    const walks = await this.walkRepository.find({ where: { user: req.id } });

    return walks;
  }

  async findOne(id: number) {
    const walk = await this.walkRepository.findOneBy({ id });
    return walk;
  }
  async update(id: number, walk: any) {
    const walkExist = await this.walkRepository.findOneBy({ id });

    if (!walkExist) {
      throw new HttpException('walk not found', HttpStatus.NOT_FOUND);
    }
    const walkDog = await this.walkRepository.save({ id, ...walk });
    return walkDog;
  }
  async remove(id: number) {
    await this.walkRepository.delete(id);
    throw new HttpException('The Walk was eliminated', HttpStatus.OK);
  }
}
