import { Module } from '@nestjs/common';
import { PunctuationsService } from './punctuations.service';
import { PunctuationsController } from './punctuations.controller';
import Punctuations from 'src/entities/punctuations.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import Dogs from 'src/entities/dogs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Punctuations, Dogs])],
  controllers: [PunctuationsController],
  providers: [PunctuationsService],
})
export class PunctuationsModule {}
