import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dataSourceOptions } from "./config/database.config";
import { ProductModule } from "./modules/product/product.module";
import { EmployeeModule } from "./modules/employee/employee.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ProductModule,
    EmployeeModule,
  ],
})
export class AppModule {}
