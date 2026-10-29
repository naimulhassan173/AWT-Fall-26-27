import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supervisor } from './supervisor.entity';
import { CreateSupervisorDto } from './dto/create-supervisor.dto';

@Injectable()
export class SupervisorsService {
  constructor(
    @InjectRepository(Supervisor)
    private readonly supervisorRepository: Repository<Supervisor>,
  ) {}

  create(dto: CreateSupervisorDto) {
    const supervisor = this.supervisorRepository.create(dto);
    return this.supervisorRepository.save(supervisor);
  }

  findAll() {
    return this.supervisorRepository.find();
  }
}