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
import { WalksService } from './walks.service';
import { CreateWalkDto } from './dto/create-walk.dto';
import { UpdateWalkDto } from './dto/update-walk.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('api/walks')
export class WalksController {
  constructor(private readonly walksService: WalksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createWalkDto: CreateWalkDto, @Req() req) {
    return this.walksService.create(createWalkDto, req);
  }

  @Post('historie')
  @UseGuards(JwtAuthGuard)
  createHistorie(@Body() walk: CreateWalkDto, @Req() req) {
    return this.walksService.create(walk, req);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.walksService.findAll(req);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string, @Req() req) {
    return this.walksService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateWalkDto: UpdateWalkDto,
    @Req() req,
  ) {
    return this.walksService.update(+id, updateWalkDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.walksService.remove(+id);
  }
}
