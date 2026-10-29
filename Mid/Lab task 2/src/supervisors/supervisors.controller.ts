import { Body, Controller, Get, Post } from '@nestjs/common';
import { SupervisorsService } from './supervisors.service';
import { CreateSupervisorDto } from './dto/create-supervisor.dto';

@Controller('supervisors')
export class SupervisorsController {
  constructor(
    private readonly supervisorsService: SupervisorsService,
  ) {}

  @Post()
  create(@Body() dto: CreateSupervisorDto) {
    return this.supervisorsService.create(dto);
  }

  @Get()
  findAll() {
    return this.supervisorsService.findAll();
  }
}