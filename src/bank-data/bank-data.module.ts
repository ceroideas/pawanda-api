import { Module } from '@nestjs/common';
import { BankDataService } from './bank-data.service';
import { BankDataController } from './bank-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Bank_datas from 'src/entities/bank_datas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bank_datas])],
  controllers: [BankDataController],
  providers: [BankDataService],
})
export class BankDataModule {}
