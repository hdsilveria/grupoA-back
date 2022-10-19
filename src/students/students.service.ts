import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/students/entity/student.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private student: Repository<Student>
    ){}

    public find(user?: any): Promise<Student[] | Student> {
        if(user) return this.student.find({ where: { id: user.id } });
        else return this.student.find();
    }

    public create(user: Student):Promise<any> {
        return this.student.insert(user).then(() => 'Usuário criado com sucesso!')
    }
    
    public searchStudent(studentName: string): Promise<any>{
        return this.student.findBy({
            name: Like(`%${studentName}%`)
        })
    }

    public async remove(id: number): Promise<string> {
        return await this.student.delete(id).then(() => 'Usuário deletado com sucesso!');
    }
    
    public async update(id: number, body: Student): Promise<string>{
        return this.student.update(id, body).then(() => 'Usuário Alterado com sucesso!')
    }
}
