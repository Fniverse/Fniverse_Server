import { Module } from '@nestjs/common';
import { UploadService } from './Upload.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { S3Client } from '@aws-sdk/client-s3';

@Module({
  imports: [ConfigModule.forRoot({})],
  providers: [
    UploadService,
    {
      provide: S3Client,
      useFactory: (configService: ConfigService) => {
        return new S3Client({
          credentials: {
            accessKeyId: configService.get('S3_ACCESS_ID'),
            secretAccessKey: configService.get('S3_ACCESS_KEY'),
          },
          region: configService.get('S3_REGION'),
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [UploadService],
})
export class UploadModule {}
