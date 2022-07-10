import { PerfumeRepository } from './../../domin/repository/Perfume.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PerfumeService {
  constructor(private readonly repository: PerfumeRepository) {}
}
