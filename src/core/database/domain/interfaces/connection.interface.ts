import { ConnectionEnum } from '../enum/connection.enum';

export default interface IConnection {
  type: ConnectionEnum;
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
}
