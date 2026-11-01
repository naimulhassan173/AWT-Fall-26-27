import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResearchOpportunity } from './research-opportunity.entity';
import { CreateResearchOpportunityDto } from './dto/create-research-opportunity.dto';

@Injectable()
export class ResearchOpportunitiesService {
  constructor(
    @InjectRepository(ResearchOpportunity)
    private readonly opportunityRepository: Repository<ResearchOpportunity>,
  ) {}

  create(dto: CreateResearchOpportunityDto) {
    const opportunity = this.opportunityRepository.create(dto);
    return this.opportunityRepository.save(opportunity);
  }

  findAll() {
    return this.opportunityRepository.find();
  }
}