import {
  Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post,
} from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";

@Controller("employees")
export class EmployeeController {
  constructor(private readonly service: EmployeeService) {}

  @Post()
  create(@Body() dto: CreateEmployeeDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() dto: UpdateEmployeeDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id", ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}
