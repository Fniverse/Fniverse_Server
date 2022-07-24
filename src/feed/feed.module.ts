import { FeedService } from './application/service/feed.service';
import { FeedRepository } from './domain/repository/Feed.repository';
import { FeedController } from './presentation/controller/Feed.controller';
import { Module } from '@nestjs/common';
import { FeedReportRepository } from './domain/repository/FeedReport.repository';
import { FeedCommentService } from './application/service/feedComment.service';
import { FeedCommentRepository } from './domain/repository/FeedComment.repository';
import { UploadModule } from '../upload/upload.module';

@Module({
  imports: [UploadModule],
  controllers: [FeedController],
  providers: [
    FeedRepository,
    FeedReportRepository,
    FeedCommentRepository,
    FeedService,
    FeedCommentService,
  ],
})
export class FeedModule {}
