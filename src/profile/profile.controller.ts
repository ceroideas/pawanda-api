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

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() profile: CreateProfileDto, @Req() req) {
    return this.profileService.create(profile, req);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getProfileUser(@Req() req) {
    return this.profileService.getProfileUser(req);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  update(@Body() updateProfileDto: UpdateProfileDto, @Req() req) {
    return this.profileService.update(updateProfileDto, req);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(+id);
  }
}
