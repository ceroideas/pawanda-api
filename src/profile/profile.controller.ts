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
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('api/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() profile: CreateProfileDto, @Req() req) {
    return this.profileService.create(profile, req);
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get('user')
  @UseGuards(JwtAuthGuard)
  getProfileUser(@Req() req) {
    return this.profileService.getProfileUser(req);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(+id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(+id);
  }
}
