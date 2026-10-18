import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { TeacherService } from "./teacher.service";
import { CreateTeacherDto } from "./dto/teacher.dto";

@Controller("teachers")
export class TeacherController {
  constructor(private readonly userService: TeacherService) {}

  @Get()
  async getTeachers() {
    return await this.userService.getTeachers();
  }

  
  @Post()
  async createTeacher(@Body() dto: CreateTeacherDto) {
    return await this.userService.createTeacher(dto);
  }

  @Patch(":id")
  async updateTeacher(@Param("id") id: string, @Body() dto: CreateTeacherDto) {
    return await this.userService.updateTeacher(id, dto);
  }

  @Delete(":id")
  async deleteTeacher(@Param("id") id: string) {
    return await this.userService.deleteTeacher(id);
  }
}


