import { IsInt, IsString } from 'class-validator';

export class CreateFeedReportDto {
  @IsInt()
  feedId: number;

  @IsInt()
  userId: number;

  @IsString()
  title: string;

  @IsString()
  desc: string;
}
