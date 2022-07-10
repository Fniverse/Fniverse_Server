import { IsInt, IsString } from 'class-validator';

export class UpdatePerfumeReviewCommentDto {
  @IsString()
  content: string;

  @IsInt()
  perfumeReviewId: number;

  @IsInt()
  perfumeReviewCommentId: number;
}
