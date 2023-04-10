import { Module } from '@nestjs/common';
import { DisponibilitiesService } from './disponibilities.service';
import { DisponibilitiesController } from './disponibilities.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import Disponibilities from 'src/entities/disponibilities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Disponibilities])],
  controllers: [DisponibilitiesController],
  providers: [DisponibilitiesService],
})
export class DisponibilitiesModule {}
