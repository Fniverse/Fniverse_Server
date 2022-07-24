import { Injectable } from '@nestjs/common';
import { CreateFeedCommentDto } from 'src/feed/domain/entity/dto/CreateFeedCommentDto';
import { FeedComment } from 'src/feed/domain/entity/FeedComment.entity';
import { FeedCommentRepository } from 'src/feed/domain/repository/FeedComment.repository';
import * as AWS from 'aws-sdk';

@Injectable()
export class FeedCommentService {
  constructor(private readonly feedCommentRepository: FeedCommentRepository) {}

  public async createComment(
    id: number,
    input: CreateFeedCommentDto,
  ): Promise<FeedComment> {
    return this.feedCommentRepository.create(id, input);
  }

  public async getComments(id: number): Promise<FeedComment[]> {
    return this.feedCommentRepository.find(id);
  }
}
