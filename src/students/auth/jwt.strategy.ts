import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from './auth.constants';
import { AuthService } from './auth.service';
import { IUser } from './user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }


  async validate(username: IUser): Promise<any> {
    const user = await this.authService.login(username);

    if (!user[0]) {
        throw new UnauthorizedException();
    }

    const payload = { username: user.username, sub: user.id };

    return { 
        message: 'Sucesso!', 
        access_token: this.jwtService.sign(payload)
    }
  }
}