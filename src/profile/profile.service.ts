import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Profile from 'src/entities/profile.entity';
import Users from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async create(profile: CreateProfileDto, req) {
    profile.user = req.user;
    const profileCreate = this.profileRepository.save(profile);

    return profileCreate;
  }

  async getProfileUser(req) {
    const profileCreate = await this.profileRepository.findOne({
      where: { user: req.user },
    });
    return req.user;
    // return profileCreate;
  }

  async update(profile: UpdateProfileDto, req) {
    const profileExist = await this.profileRepository.findOne({
      where: { user: req.user },
    });

    if (!profileExist) {
      throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
    }

    const profileUpdated = await this.profileRepository.save({
      id: profileExist.id,
      ...profile,
    });
    return profileUpdated;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
