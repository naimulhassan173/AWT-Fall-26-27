import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "./entities/student.entity";
import { Repository } from "typeorm";
import { CreateStudentDto, UpdateStudentDto } from "./dto/student.dto";


@Injectable()
export class StudentService {
constructor(
  @InjectRepository(Student) private readonly userRepository: Repository<Student>,
) {}

async getStudents() {
try {
  const users = await this.userRepository.find();
  return users;}
  catch (error) {
    throw error;
}
}

async createStudent(dto: CreateStudentDto) {
try{
  const responce = await this.userRepository.create(dto);
  return await this.userRepository.save(responce);
}
catch (error) {
  throw error;
}}

async updateStudent(id: string, dto: UpdateStudentDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("Student with ID not found");
    }
    const user = await this.userRepository.findOne({ where: { id:id } });
    if (!user) {
      throw new NotFoundException("Student with ID not found");
    }
    Object.assign(user, dto);
    const {id: uid, ...rest}=user;
    return await this.userRepository.update({id:id}, rest);
  } 
  catch(error){
    throw error;
  }
}

async deleteStudent(id: string) {
  try{
  const user = await this.userRepository.findOne({ where: { id:id } });
if (!user) {
  throw new NotFoundException("Student with ID not found");  
}
return await this.userRepository.delete({id:id});
  }
  catch(error){
    throw error;
  }
}}
