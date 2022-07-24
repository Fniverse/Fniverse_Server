import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Feed } from '../entity/Feed.entity';
import { CreateFeedDto } from '../entity/dto/CreateFeedDto';
import { UpdateFeedDto } from '../entity/dto/UpdateFeedDto';
import { Category } from '../entity/Feed.entity';

@Injectable()
export class FeedRepository {
  private repository: Repository<Feed>;
  constructor(private datasource: DataSource) {
    this.repository = this.datasource.getRepository(Feed);
  }

  public async create(input: CreateFeedDto): Promise<Feed> {
    return this.repository.save({ ...input });
  }

  public async findById(id: number): Promise<Feed> {
    return this.repository.findOne({ where: { id } });
  }

  public async updateById(id: number, input: UpdateFeedDto) {
    return this.repository.update(id, { ...input });
  }

  public async deleteById(id: number) {
    return this.repository.delete(id);
  }

  public async findAll(category: Category) {
    return this.repository.find({ where: { category } });
  }
}
