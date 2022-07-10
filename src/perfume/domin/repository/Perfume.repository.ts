import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PerfumeRepository {
  constructor(private dataSource: DataSource) {}
}
