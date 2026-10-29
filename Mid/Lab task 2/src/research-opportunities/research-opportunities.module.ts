import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResearchOpportunity } from './research-opportunity.entity';
import { ResearchOpportunitiesController } from './research-opportunities.controller';
import { ResearchOpportunitiesService } from './research-opportunities.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResearchOpportunity])],
  controllers: [ResearchOpportunitiesController],
  providers: [ResearchOpportunitiesService],
})
export class ResearchOpportunitiesModule {}