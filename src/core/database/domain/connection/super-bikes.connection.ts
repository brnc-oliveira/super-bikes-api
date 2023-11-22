import { ConfigService } from '@nestjs/config';
import Connection from '../class/connection.class';
import { ConnectionEnum } from '../enum/connection.enum';

export default class SuperBikesConnection extends Connection {
  public constructor(config?: ConfigService) {
    super(ConnectionEnum.SUPER_BIKES, config);
  }
}
