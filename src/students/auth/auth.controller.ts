import { Body, Controller, Post, Res, Get, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { IUser } from './user.interface';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
        private jwtStrategy: JwtStrategy){}

    @Get()
    @UseGuards(JwtAuthGuard)
    findAll(): any {
        return this.authService.find()
    }

    @Post('login')
    login(@Body() user: IUser, @Res() response: Response): any {
        this.jwtStrategy.validate(user).then(res => {
            return response.status(200).json({
                ...res
            })
        })
        .catch(err => {
            return response.status(401).json({
                ...err
            })
        })
    }

    @Post('newUser')
    create(@Body() user: IUser, @Res() response: Response){
        this.authService.create(user).then(res => {
            return response.status(200).json({
                message: res
            })
        })
    }
}
