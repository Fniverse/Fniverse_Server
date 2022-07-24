import { IsInt, IsString, IsEnum } from 'class-validator';
import { Category } from 'src/feed/domain/entity/Feed.entity';

export class CreateFeedDto {
  @IsEnum(Category)
  category: Category;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsInt()
  userId: number;
}
