import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Profile from 'src/entities/profile.entity';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  async create(profile: CreateProfileDto, req) {
    profile.user = req.user;
    const profileCreate = this.profileRepository.save(profile);

    return profileCreate;
  }

  findAll() {}

  getProfileUser(req) {
    const profileCreate = this.profileRepository.findOne({
      where: { user: req.user },
    });
    return profileCreate;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
