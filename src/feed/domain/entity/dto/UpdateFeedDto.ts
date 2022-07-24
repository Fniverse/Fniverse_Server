import { Category } from 'src/feed/domain/entity/Feed.entity';

export interface UpdateFeedDto {
  category: Category;
  title: string;
  description: string;
}
