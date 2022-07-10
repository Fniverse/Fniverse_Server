import { PerfumeReviewService } from './../../application/service/perfumeReview.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePerfumeReviewDto } from '../dto/CreatePerfumeReview.dto';

@Controller('/perfumeReview')
export class PerfumeReviewController {
  constructor(private readonly service: PerfumeReviewService) {}

  @Post()
  createPerfumeReview(@Body() input: CreatePerfumeReviewDto) {
    return this.service.createReview(input);
  }

  @Get()
  getPerfumeReviews() {
    return this.service.getReviews();
  }

  @Get('/:id')
  getPerfumeReview(@Param() param: { id: number }) {
    const { id } = param;
    return this.service.getReview(id);
  }
}
