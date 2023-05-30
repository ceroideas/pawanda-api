import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { FacebookStrategy } from 'src/auth/strategy/facebook.strategy';
// import { GoogleStrategy } from 'src/auth/strategy/google.strategy';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';
import Users from 'src/entities/user.entity';

const JwtInstance = JwtModule.register({
  secret: 'mysecret',
  signOptions: { expiresIn: '20h' },
});

@Module({
  imports: [TypeOrmModule.forFeature([Users]), JwtInstance],
  exports: [JwtInstance],
  controllers: [],
  providers: [JwtStrategy/*, GoogleStrategy, FacebookStrategy*/],
})
export class SharedModule {}
