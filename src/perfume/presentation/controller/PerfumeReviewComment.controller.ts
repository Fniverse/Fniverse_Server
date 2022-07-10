import { Controller } from '@nestjs/common';
import { PerfumeReviewService } from 'src/perfume/application/service/perfumeReview.service';

@Controller('/perfumeReviewComment')
export class PerfumeReviewCommentController {
  constructor(private readonly service: PerfumeReviewService) {}
}
