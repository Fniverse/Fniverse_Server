import { PerfumeReviewRepository } from './../../domin/repository/PerfumeReview.repository';
import { Injectable } from '@nestjs/common';
import { CreatePerfumeReviewCommentDto } from 'src/perfume/presentation/dto/CreatePerfumeReviewComment.dto';
import { PerfumeReviewComment } from 'src/perfume/domin/entity/PerfumeReviewComment.entity';
import { UpdatePerfumeReviewCommentDto } from 'src/perfume/presentation/dto/UpdatePerfumeReviewComment.dto';

@Injectable()
export class PerfumeReviewCommentService {
  constructor(private readonly repository: PerfumeReviewRepository) {}

  public async createReviewComment(
    input: CreatePerfumeReviewCommentDto,
  ): Promise<PerfumeReviewComment> {
    return this.repository.createComment(input);
  }

  public async updateReviewComment(input: UpdatePerfumeReviewCommentDto) {
    const review = await this.repository.findById(input.perfumeReviewId);
    if (!review) {
      throw new Error('PerfumeReview is not found');
    }
    const reviewComment = await this.repository.findCommentById(
      input.perfumeReviewCommentId,
    );
    if (!reviewComment) {
      throw new Error('PerfumeComment is not found');
    }
    reviewComment.changeInfo({ content: input.content });
    return this.repository.saveComment(reviewComment);
  }
}
