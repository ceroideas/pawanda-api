import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Dogs from 'src/entities/dogs.entity';
import { Repository } from 'typeorm';

import { UpdateDogDto } from './dto/update-dog.dto';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dogs) private dogRepository: Repository<Dogs>,
  ) {}

  async create(dog: any, req) {
    dog.user = req.user.id;
    dog.userId = req.user.id;

    const newDog = await this.dogRepository.save(dog);

    return newDog;
  }

  async findAll(req) {
    const userDogs = await this.dogRepository.find({ where: { userId: req.user.id } });
    return userDogs;
  }

  async findOne(id: number) {
    const dog = await this.dogRepository.findOne({
      where: { id },
      relations: ['walk'],
    });
    return dog;
  }

  async update(id: number, dog: UpdateDogDto) {
    const dogExist = await this.dogRepository.findOneBy({ id });

    if (!dogExist) {
      throw new HttpException('Dog not found', HttpStatus.NOT_FOUND);
    }
    const updatedDog = await this.dogRepository.save({ id, ...dog });
    return updatedDog;
  }

  async remove(id: number) {
    await this.dogRepository.delete(id);
    throw new HttpException('The Dog was eliminated', HttpStatus.OK);
  }
}
