import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Races from 'src/entities/races.entity';
import { Repository } from 'typeorm';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';

@Injectable()
export class RacesService {
  constructor(
    @InjectRepository(Races) private raceRepository: Repository<Races>,
  ) {}

  async create(race: CreateRaceDto) {
    const newRace = await this.raceRepository.save(race);

    return newRace;
  }

  async findAll() {
    const allRace = await this.raceRepository.find();
    return allRace;
  }

  async findOne(id: number) {
    const race = await this.raceRepository.findOneBy({ id });
    return race;
  }

  // update(id: number, updateRaceDto: UpdateRaceDto) {
  //   return `This action updates a #${id} race`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} race`;
  // }
}
