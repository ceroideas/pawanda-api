import { PartialType } from '@nestjs/mapped-types';
import { CreateDisponibilityDto } from './create-disponibility.dto';

export class UpdateDisponibilityDto extends PartialType(CreateDisponibilityDto) {}
