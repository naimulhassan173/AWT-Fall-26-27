import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResearchOpportunitiesService } from './research-opportunities.service';
import { CreateResearchOpportunityDto } from './dto/create-research-opportunity.dto';

@Controller('research-opportunities')
export class ResearchOpportunitiesController {
  constructor(
    private readonly opportunitiesService: ResearchOpportunitiesService,
  ) {}

  @Post()
  create(@Body() dto: CreateResearchOpportunityDto) {
    return this.opportunitiesService.create(dto);
  }

  @Get()
  findAll() {
    return this.opportunitiesService.findAll();
  }
}