import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entity/user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users)
        private auth: Repository<Users>,
    ){}

    public async create(user: Users):Promise<any> {
        return this.auth.insert(user).then(() => 'Usuário criado com sucesso!')
    }

    public find(): Promise<Users[] | Users> {
        return this.auth.find();
    }

    public async login(value: Users): Promise<any>{
        return this.auth.find({ where: { username: value.username, password: value.password } })
    }
}
