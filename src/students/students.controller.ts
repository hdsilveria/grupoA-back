import { Body, Controller, Get, Post, Query, Res, Delete, Param } from '@nestjs/common';
import { Student } from 'src/student.entity';
import { ISearchStudent } from './students.interface';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private studentService: StudentsService){}

    @Get()
    findAll(): any {
        return this.studentService.findAll()
    }

    @Post()
    create(@Body() user: Student){
        return this.studentService.create(user)
    }

    @Get('name')
    search(@Query() student: ISearchStudent){
        return this.studentService.searchStudent(student.name)
    }

    @Post(':id')
    update(@Body() student: Student, @Param() id: number, @Res() response){
        this.studentService.update(id, student).then(res => {
            return response.status(200).json({
                message: res
            })
        })
    }

    @Delete(':id')
    delete(@Param('id') id: number, @Res() response){
        this.studentService.remove(id).then(res => {
            return response.status(200).json({
                message: res
            })
        })
    }
}
