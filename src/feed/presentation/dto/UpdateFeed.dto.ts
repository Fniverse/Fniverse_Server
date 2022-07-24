import { Category } from 'src/feed/domain/entity/Feed.entity';
import { IsString, IsEnum } from 'class-validator';

export class UpdateFeedDto {
  @IsEnum(Category)
  category: Category;

  @IsString()
  title: string;

  @IsString()
  description: string;
}
