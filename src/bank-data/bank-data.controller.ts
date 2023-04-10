import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { BankDataService } from './bank-data.service';
import { CreateBankDatumDto } from './dto/create-bank-datum.dto';
import { UpdateBankDatumDto } from './dto/update-bank-datum.dto';

@Controller('api/bank-data')
export class BankDataController {
  constructor(private readonly bankDataService: BankDataService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() bank: CreateBankDatumDto, @Req() req) {
    return this.bankDataService.create(bank, req);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.bankDataService.findAll(req);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.bankDataService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() bank: UpdateBankDatumDto) {
    return this.bankDataService.update(+id, bank);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.bankDataService.remove(+id);
  }
}
