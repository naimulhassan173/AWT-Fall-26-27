import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin } from "./entities/admin.entity";
import { Repository } from "typeorm";
import { CreateAdminDto, UpdateAdminDto } from "./dto/admin.dto";


@Injectable()
export class AdminService {
constructor(
  @InjectRepository(Admin) private readonly userRepository: Repository<Admin>,
) {}

async getAdmins() {
try {
  const users = await this.userRepository.find();
  return users;}
  catch (error) {
    throw error;
}
}

async createAdmin(dto: CreateAdminDto) {
try{
  const responce = await this.userRepository.create(dto);
  return await this.userRepository.save(responce);
}
catch (error) {
  throw error;
}}

async updateAdmin(id: string, dto: UpdateAdminDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("Admin with ID not found");
    }
    const user = await this.userRepository.findOne({ where: { id:id } });
    if (!user) {
      throw new NotFoundException("Admin with ID not found");
    }
    Object.assign(user, dto);
    const {id: uid, ...rest}=user;
    return await this.userRepository.update({id:id}, rest);
  } 
  catch(error){
    throw error;
  }
}

async deleteAdmin(id: string) {
  try{
  const user = await this.userRepository.findOne({ where: { id:id } });
if (!user) {
  throw new NotFoundException("Admin with ID not found");  
}
return await this.userRepository.delete({id:id});
  }
  catch(error){
    throw error;
  }
}}