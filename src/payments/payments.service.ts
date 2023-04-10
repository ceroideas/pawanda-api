import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Payments from 'src/entities/payments.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payments) private paymentRepository: Repository<Payments>,
  ) {}

  async create(payment: CreatePaymentDto) {
    const paymentCreate = await this.paymentRepository.save(payment);

    return paymentCreate;
  }

  async findAll(req) {
    const payments = await this.paymentRepository.find({
      where: { user: { id: req.user.id } },
    });

    return payments;
  }

  async findOne(id: number) {
    console.log(id);
    const payment = await this.paymentRepository.findOneBy({ id });
    console.log(payment);
    return payment;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  async remove(id: number) {
    await this.paymentRepository.delete(id);
    throw new HttpException('The payment was eliminated', HttpStatus.OK);
  }
}
