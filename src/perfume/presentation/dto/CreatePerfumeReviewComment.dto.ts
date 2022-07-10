import { IsString, IsInt } from 'class-validator';

export class CreatePerfumeReviewCommentDto {
  @IsString()
  content: string;

  @IsInt()
  userId: number;

  @IsInt()
  perfumeReviewId: number;
}
