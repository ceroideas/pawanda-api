import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RacesService } from './races.service';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('api/races')
export class RacesController {
  constructor(private readonly racesService: RacesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createRaceDto: CreateRaceDto) {
    return this.racesService.create(createRaceDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.racesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.racesService.findOne(+id);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.racesService.remove(+id);
  // }
}
