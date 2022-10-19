import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/students/entity/student.entity';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [
    TypeOrmModule.forFeature([Student])
  ]
})
export class StudentsModule {}
