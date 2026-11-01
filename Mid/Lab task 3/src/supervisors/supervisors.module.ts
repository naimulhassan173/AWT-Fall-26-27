import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supervisor } from './supervisor.entity';
import { SupervisorsController } from './supervisors.controller';
import { SupervisorsService } from './supervisors.service';

@Module({
  imports: [TypeOrmModule.forFeature([Supervisor])],
  controllers: [SupervisorsController],
  providers: [SupervisorsService],
})
export class SupervisorsModule {}