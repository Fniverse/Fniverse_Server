import { PerfumeReview } from './../entity/PerfumeReview.entity';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreatePerfumeReviewDto } from 'src/perfume/presentation/dto/CreatePerfumeReview.dto';
import { UpdatePerfumeReviewDto } from 'src/perfume/presentation/dto/UpdatePerfumeReview.dto';

@Injectable()
export class PerfumeReviewRepository {
  private repository: Repository<PerfumeReview>;

  constructor(private dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(PerfumeReview);
  }

  public async create(input: CreatePerfumeReviewDto): Promise<PerfumeReview> {
    return this.repository.save({ ...input });
  }

  public async findAll(): Promise<PerfumeReview[]> {
    return this.repository.find({});
  }

  public async findById(id: number): Promise<PerfumeReview | null> {
    return this.repository.findOne({ where: { id } });
  }

  public async update(id: number, input: UpdatePerfumeReviewDto) {
    await this.repository.update(id, { ...input });
  }
}
