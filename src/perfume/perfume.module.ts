import { PerfumeReviewService } from './application/service/perfumeReview.service';
import { PerfumeReviewRepository } from './domin/repository/PerfumeReview.repository';
import { Module } from '@nestjs/common';
import { PerfumeReviewController } from './presentation/controller/PerfumeReview.controller';

@Module({
  imports: [],
  controllers: [PerfumeReviewController],
  providers: [PerfumeReviewRepository, PerfumeReviewService],
})
export class PerfumeModule {}
