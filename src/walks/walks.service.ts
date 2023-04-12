import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Dogs from 'src/entities/dogs.entity';
import Walks from 'src/entities/walks.entity';
import { Repository } from 'typeorm';
import { CreateWalkDto } from './dto/create-walk.dto';
import { UpdateWalkDto } from './dto/update-walk.dto';
import { In } from 'typeorm';
import Histories from 'src/entities/histories.entity';
@Injectable()
export class WalksService {
  constructor(
    @InjectRepository(Walks) private walkRepository: Repository<Walks>,
    @InjectRepository(Dogs) private dogRepository: Repository<Dogs>,
    @InjectRepository(Histories)
    private hitorieRepository: Repository<Histories>,
  ) {}

  async create(walk: any, req) {
    walk.user = req.user.id;

    const dog = await this.dogRepository.find({ where: { id: In(walk.dog) } });

    walk.dog = dog;

    const walkCreate = await this.walkRepository.save(walk);

    return walkCreate;
  }

  async createHistorie(walk: any, req) {
    const historie = {
      walk_id: walk.id,
      user_id: req.user.id,
      walker_id: walk.walker_id,
    };
    const newHistorie = await this.hitorieRepository.save(historie);
    return newHistorie;
  }

  async findAll(req) {
    const walks = await this.walkRepository.find({ where: { user: req.id } });

    return walks;
  }

  async findOne(id: number) {
    const walk = await this.walkRepository.findOne({
      where: { id },
      relations: ['dog'],
    });
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
