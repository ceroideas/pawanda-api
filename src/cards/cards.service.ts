import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Cards from 'src/entities/cards.entity';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Cards) private cardRepository: Repository<Cards>,
  ) {}

  async create(card: any, req) {
    card.user = req.user.id;
    const newCard = await this.cardRepository.save(card);

    return newCard;
  }

  async findAll(req) {
    const cards = await this.cardRepository.find({ where: { user: req.id } });
    return cards;
  }

  async findOne(id: number) {
    const card = await this.cardRepository.findOneBy({ id });
    return card;
  }
  async update(id: number, card: UpdateCardDto) {
    const cardExist = await this.cardRepository.findOneBy({ id });

    if (!cardExist) {
      throw new HttpException('Card not found', HttpStatus.NOT_FOUND);
    }
    const updatedCard = await this.cardRepository.save({ id, ...card });
    return updatedCard;
  }

  async remove(id: number) {
    await this.cardRepository.delete(id);
    throw new HttpException('The Card was eliminated', HttpStatus.OK);
  }
}
