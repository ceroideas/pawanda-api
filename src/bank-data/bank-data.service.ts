import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Bank_datas from 'src/entities/bank_datas.entity';
import { Repository } from 'typeorm';
import { CreateBankDatumDto } from './dto/create-bank-datum.dto';
import { UpdateBankDatumDto } from './dto/update-bank-datum.dto';

@Injectable()
export class BankDataService {
  constructor(
    @InjectRepository(Bank_datas)
    private bankRepository: Repository<Bank_datas>,
  ) {}

  async create(bank: any, req) {
    bank.user = req.user.id;
    const newBank = await this.bankRepository.save(bank);

    return newBank;
  }

  async findAll(req) {
    const banks = await this.bankRepository.find({
      where: { user: req.user.id },
    });
    return banks;
  }

  async findOne(id: number) {
    const bank = await this.bankRepository.findOneBy({ id });
    return bank;
  }

  async update(id: number, bank: UpdateBankDatumDto) {
    const bankExist = await this.bankRepository.findOneBy({ id });

    if (!bankExist) {
      throw new HttpException('Bank not found', HttpStatus.NOT_FOUND);
    }
    const updateBank = await this.bankRepository.save({ id, ...bank });
    return updateBank;
  }

  async remove(id: number) {
    await this.bankRepository.delete(id);
    throw new HttpException('The Bank was eliminated', HttpStatus.OK);
  }
}
