import DeleteBikeController from './methods/delete-bike.controller';
import GetBikeController from './methods/get-bike.controller';
import PatchBikeController from './methods/patch-bike.controller';
import PostBikeController from './methods/post-bike.controller';

export const bikeController = [
  PostBikeController,
  PatchBikeController,
  DeleteBikeController,
  GetBikeController,
];
