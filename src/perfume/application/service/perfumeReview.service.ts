import { PerfumeReviewRepository } from './../../domin/repository/PerfumeReview.repository';
import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from '../dto/CreateReviewDto';
import { PerfumeReview } from 'src/perfume/domin/entity/PerfumeReview.entity';
import { UpdatePerfumeReviewDto } from 'src/perfume/presentation/dto/UpdatePerfumeReview.dto';

@Injectable()
export class PerfumeReviewService {
  constructor(
    private readonly perfumeReviewRepository: PerfumeReviewRepository,
  ) {}
  public async createReview(input: CreateReviewDto): Promise<PerfumeReview> {
    return this.perfumeReviewRepository.create(input);
  }

  public async updateReview(input: UpdatePerfumeReviewDto): Promise<void> {
    const review = await this.perfumeReviewRepository.findById(
      input.perfumeReviewId,
    );
    if (!review) {
      throw new Error('PerfumeReview is not found');
    }
    await this.perfumeReviewRepository.update(input.perfumeReviewId, {
      ...input,
    });
  }

  public async getReviews(): Promise<PerfumeReview[]> {
    return this.perfumeReviewRepository.findAll();
  }

  public async getReview(id: number): Promise<PerfumeReview> {
    const result = await this.perfumeReviewRepository.findById(id);
    if (!result) {
      throw new Error('PerfumeReview is not found');
    }
    return result;
  }
}
