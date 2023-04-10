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
import { DisponibilitiesService } from './disponibilities.service';
import { CreateDisponibilityDto } from './dto/create-disponibility.dto';
import { UpdateDisponibilityDto } from './dto/update-disponibility.dto';

@Controller('api/disponibilities')
export class DisponibilitiesController {
  constructor(
    private readonly disponibilitiesService: DisponibilitiesService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() disponibility: CreateDisponibilityDto, @Req() req) {
    return this.disponibilitiesService.create(disponibility, req);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.disponibilitiesService.findAll(req);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.disponibilitiesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateDisponibilityDto: UpdateDisponibilityDto,
  ) {
    return this.disponibilitiesService.update(+id, updateDisponibilityDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.disponibilitiesService.remove(+id);
  }
}
