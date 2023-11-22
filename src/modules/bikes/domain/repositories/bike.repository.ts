import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import BaseRepository from 'src/core/database/domain/repositories/base.repository';
import BikeEntity from '../entities/bike.entity';

@Injectable()
export default class BikeRepository extends BaseRepository<BikeEntity> {
  public constructor(
    @InjectRepository(BikeEntity)
    public readonly manager: Repository<BikeEntity>,
  ) {
    super();
  }
}
