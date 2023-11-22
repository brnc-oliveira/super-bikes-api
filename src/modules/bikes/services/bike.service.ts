import { Injectable } from '@nestjs/common';
import CreateBikeProvider from './providers/create-bike.provider';
import UpdateBikeProvider from './providers/update-bike.provider';
import DeleteBikeProvider from './providers/delete-bike.provider';
import FindOneBikeProvider from './providers/find-one-bike.provider';
import FindManyBikeProvider from './providers/find-many-bike.provider';

@Injectable()
export default class BikeService {
  public create: CreateBikeProvider;
  public update: UpdateBikeProvider;
  public delete: DeleteBikeProvider;
  public findOne: FindOneBikeProvider;
  public findMany: FindManyBikeProvider;

  public constructor() {
    this.create = new CreateBikeProvider();
    this.update = new UpdateBikeProvider();
    this.delete = new DeleteBikeProvider();
    this.findOne = new FindOneBikeProvider();
    this.findMany = new FindManyBikeProvider();
  }
}
