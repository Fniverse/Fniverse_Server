import { Category } from 'src/feed/domain/entity/Feed.entity';

export interface CreateFeedDto {
  category: Category;
  title: string;
  description: string;
  userId: number;
}
