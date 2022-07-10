import { IsString, IsInt } from 'class-validator';

export class CreatePerfumeReviewDto {
  @IsString()
  content: string;

  @IsString()
  title: string;

  @IsInt()
  userId: number;

  @IsInt()
  perfumeId: number;
}
