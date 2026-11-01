import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  create(dto: CreateStudentDto) {
    const student = this.studentRepository.create(dto);
    return this.studentRepository.save(student);
  }

  findAll() {
    return this.studentRepository.find();
  }
}