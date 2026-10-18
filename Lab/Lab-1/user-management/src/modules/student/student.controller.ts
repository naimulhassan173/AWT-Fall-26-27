import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { StudentService } from "./student.service";
import { CreateStudentDto } from "./dto/student.dto";

@Controller("students")
export class StudentController {
  constructor(private readonly userService: StudentService) {}

  @Get()
  async getStudents() {
    return await this.userService.getStudents();
  }

  
  @Post()
  async createStudent(@Body() dto: CreateStudentDto) {
    return await this.userService.createStudent(dto);
  }

  @Patch(":id")
  async updateStudent(@Param("id") id: string, @Body() dto: CreateStudentDto) {
    return await this.userService.updateStudent(id, dto);
  }

  @Delete(":id")
  async deleteStudent(@Param("id") id: string) {
    return await this.userService.deleteStudent(id);
  }
}


