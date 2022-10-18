import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';

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
      entities: [Student],
      synchronize: true,
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
