import { IsInt, IsString } from 'class-validator';

export class CreateFeedCommentDto {
  @IsInt()
  userId: number;

  @IsString()
  content: string;
}
