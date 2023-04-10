import { PartialType } from '@nestjs/mapped-types';
import { CreateBankDatumDto } from './create-bank-datum.dto';

export class UpdateBankDatumDto extends PartialType(CreateBankDatumDto) {}
