import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';
import User from 'src/entities/user.entity';

const JwtInstance = JwtModule.register({
  secret: 'mysecret',
  signOptions: { expiresIn: '20h' },
});

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtInstance],
  exports: [JwtInstance],
  controllers: [],
  providers: [JwtStrategy],
})
export class SharedModule {}
