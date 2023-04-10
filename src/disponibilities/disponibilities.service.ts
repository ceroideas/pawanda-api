import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Disponibilities from 'src/entities/disponibilities.entity';
import { Repository } from 'typeorm';
import { CreateDisponibilityDto } from './dto/create-disponibility.dto';
import { UpdateDisponibilityDto } from './dto/update-disponibility.dto';

@Injectable()
export class DisponibilitiesService {
  constructor(
    @InjectRepository(Disponibilities)
    private disponibilitieRepository: Repository<Disponibilities>,
  ) {}

  async create(disponibilitie: any, req) {
    disponibilitie.user = req.user.id;
    const newDisponibilitie = await this.disponibilitieRepository.save(
      disponibilitie,
    );

    return newDisponibilitie;
  }

  async findAll(req) {
    const disponibilities = await this.disponibilitieRepository.find({
      where: { user: req.user.id },
    });
    return disponibilities;
  }

  async findOne(id: number) {
    const disponibilitie = await this.disponibilitieRepository.findOneBy({
      id,
    });
    return disponibilitie;
  }

  async update(id: number, disponibilitie: UpdateDisponibilityDto) {
    const disponibilitieExist = await this.disponibilitieRepository.findOneBy({
      id,
    });

    if (!disponibilitieExist) {
      throw new HttpException('Disponibilitie not found', HttpStatus.NOT_FOUND);
    }
    const updateDisponibilitie = await this.disponibilitieRepository.save({
      id,
      ...disponibilitie,
    });
    return updateDisponibilitie;
  }

  async remove(id: number) {
    await this.disponibilitieRepository.delete(id);
    throw new HttpException('The Disponibilitie was eliminated', HttpStatus.OK);
  }
}
