import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsAndEmployees1792428000000
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(new Table({
      name: "products",
      columns: [
        { name: "id", type: "uuid", isPrimary: true, default: "uuid_generate_v4()" },
        { name: "name", type: "varchar" },
        { name: "category", type: "varchar" },
        { name: "price", type: "double precision" },
        { name: "quantity", type: "integer" },
      ],
    }));
    await queryRunner.createTable(new Table({
      name: "employees",
      columns: [
        { name: "id", type: "uuid", isPrimary: true, default: "uuid_generate_v4()" },
        { name: "name", type: "varchar" },
        { name: "email", type: "varchar" },
        { name: "phone", type: "varchar" },
        { name: "password", type: "varchar" },
        { name: "age", type: "integer" },
        { name: "years_of_working", type: "integer" },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("employees");
    await queryRunner.dropTable("products");
  }
}
