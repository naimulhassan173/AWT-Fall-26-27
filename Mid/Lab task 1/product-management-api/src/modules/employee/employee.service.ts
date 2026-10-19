import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly repository: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<Employee> {
    const record = await this.repository.findOne({ where: { id } });
    if (!record) {
      throw new NotFoundException("Employee with this ID was not found");
    }
    return record;
  }

  async create(dto: CreateEmployeeDto): Promise<Employee> {
    const record = this.repository.create(dto);
    return this.repository.save(record);
  }

  async update(id: string, dto: UpdateEmployeeDto): Promise<Employee> {
    const record = await this.findOne(id);
    Object.assign(record, dto);
    return this.repository.save(record);
  }

  async remove(id: string) {
    const record = await this.findOne(id);
    await this.repository.delete(record.id);
    return { message: "Employee deleted successfully", id };
  }
}
