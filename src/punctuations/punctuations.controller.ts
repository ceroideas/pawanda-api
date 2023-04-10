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
import { PunctuationsService } from './punctuations.service';
import { CreatePunctuationDto } from './dto/create-punctuation.dto';
import { UpdatePunctuationDto } from './dto/update-punctuation.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('api/punctuations')
export class PunctuationsController {
  constructor(private readonly punctuationsService: PunctuationsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() punctuation: CreatePunctuationDto, @Req() req) {
    return this.punctuationsService.create(punctuation, req);
  }

  @Get('user')
  @UseGuards(JwtAuthGuard)
  findAllPunctuationUser(@Req() req) {
    return this.punctuationsService.findAllPunctuationUser(req);
  }

  @Get('walker')
  @UseGuards(JwtAuthGuard)
  findAllPunctuationWalker(@Req() req) {
    return this.punctuationsService.findAllPunctuationWalker(req);
  }

  @Get('dog/:id')
  @UseGuards(JwtAuthGuard)
  findAllPunctuationDog(@Req() req, @Param('id') id: string) {
    return this.punctuationsService.findAllPunctuationDog(req, +id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.punctuationsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePunctuationDto: UpdatePunctuationDto) {
  //   return this.punctuationsService.update(+id, updatePunctuationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.punctuationsService.remove(+id);
  // }
}
