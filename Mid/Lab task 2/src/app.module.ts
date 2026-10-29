import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { SupervisorsModule } from './supervisors/supervisors.module';
import { ResearchOpportunitiesModule } from './research-opportunities/research-opportunities.module';
import dataSource from './data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource.options),
    StudentsModule,
    SupervisorsModule,
    ResearchOpportunitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}