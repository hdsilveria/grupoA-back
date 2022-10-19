import { Body, Controller, Get, Post, Query, Res, Delete, Param } from '@nestjs/common';
import { Response } from 'express';
import { Student } from 'src/student.entity';
import { ISearchStudent } from './students.interface';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private studentService: StudentsService){}

    @Get()
    findAll(): any {
        return this.studentService.find()
    }

    @Get('id/:id')
    getOne(@Param() id: number): any {
        return this.studentService.find(id)
    }

    @Post()
    create(@Body() user: Student, @Res() response: Response){
        this.studentService.create(user).then(res => {
            return response.status(200).json({
                message: res
            })
        }).catch(err => {
            return response.status(400).json({
               err
            })
        })
    }

    @Get('student')
    search(@Query() student: ISearchStudent){
        return this.studentService.searchStudent(student.name)
    }

    @Post(':id')
    update(@Body() student: Student, @Param() id: number, @Res() response: Response){
        this.studentService.update(id, student).then(res => {
            return response.status(200).json({
                message: res
            })
        }).catch(err => {
            return response.status(400).json({
                err
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
