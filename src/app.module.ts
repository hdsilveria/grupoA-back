import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students/entity/student.entity';
import { Users } from './students/entity/user.entity';

@Module({
  imports: [
    StudentsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'grupoa',
      entities: [Student, Users],
      synchronize: true,
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
