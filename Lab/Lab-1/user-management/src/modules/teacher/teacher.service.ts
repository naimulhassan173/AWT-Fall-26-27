import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Teacher } from "./entities/teacher.entity";
import { Repository } from "typeorm";
import { CreateTeacherDto, UpdateTeacherDto } from "./dto/teacher.dto";


@Injectable()
export class TeacherService {
constructor(
  @InjectRepository(Teacher) private readonly userRepository: Repository<Teacher>,
) {}

async getTeachers() {
try {
  const users = await this.userRepository.find();
  return users;}
  catch (error) {
    throw error;
}
}

async createTeacher(dto: CreateTeacherDto) {
try{
  const responce = await this.userRepository.create(dto);
  return await this.userRepository.save(responce);
}
catch (error) {
  throw error;
}}

async updateTeacher(id: string, dto: UpdateTeacherDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("Teacher with ID not found");
    }
    const user = await this.userRepository.findOne({ where: { id:id } });
    if (!user) {
      throw new NotFoundException("Teacher with ID not found");
    }
    Object.assign(user, dto);
    const {id: uid, ...rest}=user;
    return await this.userRepository.update({id:id}, rest);
  } 
  catch(error){
    throw error;
  }
}

async deleteTeacher(id: string) {
  try{
  const user = await this.userRepository.findOne({ where: { id:id } });
if (!user) {
  throw new NotFoundException("Teacher with ID not found");  
}
return await this.userRepository.delete({id:id});
  }
  catch(error){
    throw error;
  }
}}
