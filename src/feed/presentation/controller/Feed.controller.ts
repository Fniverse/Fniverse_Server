import { FeedService } from 'src/feed/application/service/feed.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CreateFeedDto } from '../dto/CreateFeed.dto';
import { UpdateFeedDto } from '../dto/UpdateFeed.dto';
import { CreateFeedReportDto } from '../dto/CreateFeedReport.dto';
import { Category } from 'src/feed/domain/entity/Feed.entity';
import { FeedCommentService } from 'src/feed/application/service/feedComment.service';
import { CreateFeedCommentDto } from '../dto/CreateFeedComment.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/Upload.service';

@Controller('/feed')
export class FeedController {
  constructor(
    private readonly service: FeedService,
    private readonly commentService: FeedCommentService,
    private readonly uploadService: UploadService,
  ) {}

  @Post('/report')
  createFeedReport(@Body() input: CreateFeedReportDto) {
    return this.service.createReport(input);
  }

  @Get()
  getFeeds(@Query() query: { category: Category }) {
    const { category = Category.TIMELINE } = query;
    return this.service.getAllFeed(category);
  }

  @Post()
  @UseInterceptors(FilesInterceptor('files', 3))
  async createFeed(
    @Body() input: CreateFeedDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    const res = await this.uploadService.uploadS3(files);
    return this.service.createFeed(input);
  }

  @Get(':id/comments')
  getComments(@Param() param: { id: number }) {
    const { id } = param;
    return this.commentService.getComments(id);
  }

  @Post(':id/comments')
  createComment(
    @Param() param: { id: number },
    @Body() input: CreateFeedCommentDto,
  ) {
    const { id } = param;
    return this.commentService.createComment(id, input);
  }

  @Get(':id')
  getFeed(@Param() param: { id: number }) {
    const { id } = param;
    return this.service.getFeed(id);
  }

  @Put(':id')
  updateFeed(@Body() input: UpdateFeedDto, @Param() param: { id: number }) {
    const { id } = param;
    return this.service.updateFeed(id, input);
  }

  @Delete(':id')
  deleteFeed(@Param() param: { id: number }) {
    const { id } = param;
    return this.service.deleteFeed(id);
  }
}
