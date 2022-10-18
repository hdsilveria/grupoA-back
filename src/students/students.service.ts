import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/student.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private student: Repository<Student>
    ){}

    public findAll(): Promise<Student[]> {
        return this.student.find();
    }
    
    public findOne(id: number): Promise<Student> {
        return this.student.findOneBy({ id });
    }

    public create(user: Student):Promise<any> {
        return this.student.insert(user)
    }
    
    public searchStudent(studentName: string): Promise<any>{
        return this.student.findBy({
            name: Like(`%${studentName}%`)
        })
    }

    public async remove(id: number): Promise<string> {
        return await this.student.delete(id).then(() => 'Usuario deletado com sucesso!');
    }
    
    public async update(id: number, body: Student): Promise<string>{
        return this.student.update(id, body).then(() => 'Usuario Alterado com sucesso!')
    }
}
