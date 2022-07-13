import { UpdatePerfumeReviewCommentDto } from 'src/perfume/presentation/dto/UpdatePerfumeReviewComment.dto';
import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CreatePerfumeReviewCommentDto } from '../dto/CreatePerfumeReviewComment.dto';
import { PerfumeReviewCommentService } from 'src/perfume/application/service/perfumeReviewComment.service';

@Controller('/perfumeReviewComment')
export class PerfumeReviewCommentController {
  constructor(private readonly service: PerfumeReviewCommentService) {}

  @Post()
  createPerfumeReviewComment(@Body() input: CreatePerfumeReviewCommentDto) {
    return this.service.createReviewComment(input);
  }

  @Patch()
  updatePerfumeReviewComment(@Body() input: UpdatePerfumeReviewCommentDto) {
    return this.service.updateReviewComment(input);
  }
}
