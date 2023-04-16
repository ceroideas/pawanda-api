import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile, Strategy } from 'passport-facebook';
import Users from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {
    super({
      clientID: process.env.APP_ID,
      clientSecret: process.env.APP_SECRET,
      callbackURL: 'http://localhost:3001/api/auth/facebook/redirect',
      scope: 'email',
      profileFields: ['emails', 'name', 'picture'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void,
    req: any,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const familyName = name.familyName ? name.familyName : '';
    const user = {
      provider: 'facebook',
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
