import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { FeedComment } from '../entity/FeedComment.entity';
import { CreateFeedCommentDto } from '../entity/dto/CreateFeedCommentDto';

@Injectable()
export class FeedCommentRepository {
  private repository: Repository<FeedComment>;
  constructor(private dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(FeedComment);
  }

  public async create(
    id: number,
    input: CreateFeedCommentDto,
  ): Promise<FeedComment> {
    return this.repository.save({ feedId: id, ...input });
  }

  public async find(id: number): Promise<FeedComment[]> {
    return this.repository.find({ where: { feedId: id } });
  }
}
