import { IsInt, IsString } from 'class-validator';

export class UpdatePerfumeReviewDto {
  @IsString()
  content: string;

  @IsString()
  title: string;

  @IsInt()
  perfumeReviewId: number;
}
