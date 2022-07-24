import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

@Injectable()
export class UploadService {
  private bucketName: string;
  constructor(
    private readonly s3: S3Client,
    private configService: ConfigService,
  ) {
    this.bucketName = this.configService.get('S3_BUCKET');
  }

  async uploadS3(files: Array<Express.Multer.File>, folder?: string) {
    folder = folder ? folder : 'common';

    const results = files.map((file) => {
      const Key = file.originalname;
      return this.s3.send(
        new PutObjectCommand({
          Bucket: `${this.bucketName}`,
          Key: `${folder}/${Key}`,
          Body: file.buffer,
        }),
      );
    });
    const images = await Promise.all(results);
    return images;
  }
}
