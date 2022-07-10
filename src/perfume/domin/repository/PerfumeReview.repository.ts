import { PerfumeReviewComment } from 'src/perfume/domin/entity/PerfumeReviewComment.entity';
import { CreatePerfumeReviewCommentDto } from './../../presentation/dto/CreatePerfumeReviewComment.dto';
import { PerfumeReview } from './../entity/PerfumeReview.entity';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreatePerfumeReviewDto } from 'src/perfume/presentation/dto/CreatePerfumeReview.dto';
import { UpdatePerfumeReviewDto } from 'src/perfume/presentation/dto/UpdatePerfumeReview.dto';

@Injectable()
export class PerfumeReviewRepository {
  private reviewRepository: Repository<PerfumeReview>;
  private reviewCommentRepository: Repository<PerfumeReviewComment>;

  constructor(private dataSource: DataSource) {
    this.reviewRepository = this.dataSource.getRepository(PerfumeReview);
    this.reviewCommentRepository =
      this.dataSource.getRepository(PerfumeReviewComment);
  }

  public async create(input: CreatePerfumeReviewDto): Promise<PerfumeReview> {
    return this.reviewRepository.save({ ...input });
  }

  public async createComment(
    input: CreatePerfumeReviewCommentDto,
  ): Promise<PerfumeReviewComment> {
    return this.dataSource
      .getRepository(PerfumeReviewComment)
      .save({ ...input });
  }

  public async findAll(): Promise<PerfumeReview[]> {
    return this.reviewRepository.find({});
  }

  public async findById(id: number): Promise<PerfumeReview | null> {
    return this.reviewRepository.findOne({
      where: { id },
    });
  }

  public async findDetailByPerfumeId(perfumeId: number) {
    return this.reviewRepository
      .createQueryBuilder('target')
      .leftJoinAndSelect('target.perfumeReviewComment', 'perfumeReviewComment')
      .leftJoinAndSelect(
        'perfumeReviewComment.perfumeReviewReply',
        'perfumeReviewReply',
      )
      .where('target.id =:perfumeId', { perfumeId })
      .getOne();
  }

  public async findCommentById(id: number): Promise<PerfumeReviewComment> {
    return this.reviewCommentRepository.findOne({ where: { id } });
  }

  public async findCommentByReviewId(
    reviewId: number,
  ): Promise<PerfumeReviewComment[]> {
    return this.reviewCommentRepository.find({
      where: { perfumeReviewId: reviewId },
    });
  }

  public async update(id: number, input: UpdatePerfumeReviewDto) {
    await this.reviewRepository.update(id, { ...input });
  }

  public async save(entity: PerfumeReview) {
    return this.reviewRepository.save(entity);
  }

  public async saveComment(entity: PerfumeReviewComment) {
    return this.reviewCommentRepository.save(entity);
  }
}
