import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/admin.dto";

@Controller("admins")
export class AdminController {
  constructor(private readonly userService: AdminService) {}

  @Get()
  async getAdmins() {
    return await this.userService.getAdmins();
  }

  
  @Post()
  async createAdmin(@Body() dto: CreateAdminDto) {
    return await this.userService.createAdmin(dto);
  }

  @Patch(":id")
  async updateAdmin(@Param("id") id: string, @Body() dto: CreateAdminDto) {
    return await this.userService.updateAdmin(id, dto);
  }

  @Delete(":id")
  async deleteAdmin(@Param("id") id: string) {
    return await this.userService.deleteAdmin(id);
  }
}

