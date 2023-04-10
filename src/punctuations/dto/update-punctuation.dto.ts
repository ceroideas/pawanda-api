import { PartialType } from '@nestjs/mapped-types';
import { CreatePunctuationDto } from './create-punctuation.dto';

export class UpdatePunctuationDto extends PartialType(CreatePunctuationDto) {}
