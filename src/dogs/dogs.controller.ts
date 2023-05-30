import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Controller('api/dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dog: CreateDogDto, @Req() req) {
    return this.dogsService.create(dog, req);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    console.log(req.user.id);
    return this.dogsService.findAll(req);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.dogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dog: UpdateDogDto) {
    return this.dogsService.update(+id, dog);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogsService.remove(+id);
  }
}
