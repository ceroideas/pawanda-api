import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Dogs from 'src/entities/dogs.entity';
import Punctuations from 'src/entities/punctuations.entity';
import { Repository } from 'typeorm';
import { CreatePunctuationDto } from './dto/create-punctuation.dto';
import { UpdatePunctuationDto } from './dto/update-punctuation.dto';

@Injectable()
export class PunctuationsService {
  constructor(
    @InjectRepository(Punctuations)
    private punctuationRepository: Repository<Punctuations>,
    @InjectRepository(Dogs) private dogRepository: Repository<Dogs>,
  ) {}

  async create(punctuation: CreatePunctuationDto, req) {
    const newpunctuation = await this.punctuationRepository.save(punctuation);

    return newpunctuation;
  }

  async findAllPunctuationUser(req) {
    const punctuations = await this.punctuationRepository.find({
      where: {
        user: {
          id: req.user.id,
        },
      },
    });
    return punctuations;
  }

  async findAllPunctuationWalker(req) {
    const punctuations = await this.punctuationRepository.find({
      where: {
        walker: {
          id: req.user.id,
        },
      },
    });
    return punctuations;
  }

  async findAllPunctuationDog(req, id) {
    const punctuations = await this.punctuationRepository.find({
      where: {
        dog: {
          id: id,
        },
      },
    });
    return punctuations;
  }

  async findOne(id: number) {
    const puntuation = await this.punctuationRepository.findOneBy({ id });
    return puntuation;
  }

  update(id: number, updatePunctuationDto: UpdatePunctuationDto) {
    return `This action updates a #${id} punctuation`;
  }

  remove(id: number) {
    return `This action removes a #${id} punctuation`;
  }
}
