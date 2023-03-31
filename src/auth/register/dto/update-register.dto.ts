import { PartialType } from '@nestjs/mapped-types';
import { UserRegisterDto } from './create-register.dto';

export class UpdateRegisterDto extends PartialType(UserRegisterDto) {}
