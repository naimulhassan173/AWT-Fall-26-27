import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { CreateProductDto, UpdateProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<Product> {
    const record = await this.repository.findOne({ where: { id } });
    if (!record) {
      throw new NotFoundException("Product with this ID was not found");
    }
    return record;
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const record = this.repository.create(dto);
    return this.repository.save(record);
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    const record = await this.findOne(id);
    Object.assign(record, dto);
    return this.repository.save(record);
  }

  async remove(id: string) {
    const record = await this.findOne(id);
    await this.repository.delete(record.id);
    return { message: "Product deleted successfully", id };
  }
}
