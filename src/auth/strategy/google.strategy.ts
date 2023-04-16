import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Users from 'src/entities/user.entity';
import { Strategy, VerifyCallback } from 'passport-google-oauth2';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3001/api/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,

    done: VerifyCallback,
    req: any,
  ): Promise<any> {
    const { id, name, emails, photos } = profile;
    const familyName = name.familyName ? name.familyName : '';

    const user = {
      provider: 'google',
      providerId: profile.id,
      email: emails[0].value,
      name: `${name.givenName} ${familyName} `,
      photo: photos[0].value,
    };

    const userExist = await this.userRepository.findOneBy({
      providerId: user.providerId,
    });

    console.log(user);

    if (!userExist) {
      const newUser = await this.userRepository.save(user);
    }

    done(null, user);
  }
}
