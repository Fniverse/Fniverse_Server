import { UpdatePerfumeReviewDto } from 'src/perfume/presentation/dto/UpdatePerfumeReview.dto';
import { PerfumeReviewService } from './../../application/service/perfumeReview.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Patch()
  async updatePerfumeReview(@Body() input: UpdatePerfumeReviewDto) {
    return this.service.updateReview(input);
  }

  @Get('/:id')
  getPerfumeReview(@Param() param: { id: number }) {
    const { id } = param;
    return this.service.getReview(id);
  }
}
