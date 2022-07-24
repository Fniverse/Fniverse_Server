import { FeedRepository } from 'src/feed/domain/repository/Feed.repository';
import { FeedReportRepository } from 'src/feed/domain/repository/FeedReport.repository';
import { Injectable } from '@nestjs/common';
import { Feed, Category } from 'src/feed/domain/entity/Feed.entity';
import { CreateFeedDto } from '../../domain/entity/dto/CreateFeedDto';
import { UpdateFeedDto } from '../../domain/entity/dto/UpdateFeedDto';
import { CreateFeedReportDto } from 'src/feed/domain/entity/dto/CreateFeedReportDto';
import { FeedReport } from 'src/feed/domain/entity/FeedReport.entity';

@Injectable()
export class FeedService {
  constructor(
    private readonly feedRepository: FeedRepository,
    private readonly feedReportRepository: FeedReportRepository,
  ) {}

  public async createFeed(input: CreateFeedDto): Promise<Feed> {
    return this.feedRepository.create(input);
  }

  public async getAllFeed(category: Category): Promise<Feed[]> {
    return this.feedRepository.findAll(category);
  }

  public async getFeed(id: number): Promise<Feed> {
    return this.feedRepository.findById(id);
  }

  public async updateFeed(id: number, input: UpdateFeedDto) {
    return this.feedRepository.updateById(id, input);
  }

  public async deleteFeed(id: number) {
    return this.feedRepository.deleteById(id);
  }

  public async createReport(input: CreateFeedReportDto): Promise<FeedReport> {
    return this.feedReportRepository.create(input);
  }
}
