import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLabTables1793132562443 implements MigrationInterface {
    name = 'CreateLabTables1793132562443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "students" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "email" character varying(190) NOT NULL, "researchInterest" character varying(150) NOT NULL, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supervisors" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "email" character varying(190) NOT NULL, "researchArea" character varying(150) NOT NULL, CONSTRAINT "PK_7c262062450a70e6f1b9f861232" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "research_opportunities" ("id" SERIAL NOT NULL, "title" character varying(150) NOT NULL, "description" text NOT NULL, "requiredSkills" character varying(250) NOT NULL, CONSTRAINT "PK_235182b3be31a0f86702c725017" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "research_opportunities"`);
        await queryRunner.query(`DROP TABLE "supervisors"`);
        await queryRunner.query(`DROP TABLE "students"`);
    }

}
