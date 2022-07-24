import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { FeedReport } from '../entity/FeedReport.entity';
import { CreateFeedReportDto } from '../entity/dto/CreateFeedReportDto';

@Injectable()
export class FeedReportRepository {
  private repository: Repository<FeedReport>;
  constructor(private dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(FeedReport);
  }

  public async create(input: CreateFeedReportDto): Promise<FeedReport> {
    return this.repository.save({ ...input });
  }
}
