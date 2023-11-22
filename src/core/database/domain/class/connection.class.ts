import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

import { ConnectionEnum } from '../enum/connection.enum';
import IConnection from '../interfaces/connection.interface';

export default class Connection {
  private host: string;
  private port: number;
  private database: string;
  private userName: string;
  private password: string;
  private type: 'postgres' | 'mssql';
  private migration: string;
  public constructor(
    connection: ConnectionEnum,
    private readonly configService?: ConfigService,
  ) {
    this.host = configService
      ? this.configService.get(Connection.getEnv(connection, 'host'))
      : process.env[Connection.getEnv(connection, 'host')];
    this.port = configService
      ? parseInt(this.configService.get(Connection.getEnv(connection, 'port')))
      : parseInt(process.env[Connection.getEnv(connection, 'port')]);
    this.database = configService
      ? this.configService.get(Connection.getEnv(connection, 'database'))
      : process.env[Connection.getEnv(connection, 'database')];
    this.userName = configService
      ? this.configService.get(Connection.getEnv(connection, 'user'))
      : process.env[Connection.getEnv(connection, 'user')];
    this.password = configService
      ? this.configService.get(Connection.getEnv(connection, 'pass'))
      : process.env[Connection.getEnv(connection, 'pass')];
    this.migration = `../../migration/${connection}/*.ts`;
    this.type = connection;
  }

  public getConnection(
    connectionVars?: IConnection,
  ): TypeOrmModuleOptions | DataSourceOptions {
    const connection = {
      type: this.type ?? connectionVars.type,
      host: this.host ?? connectionVars.host,
      port: `${this.port}` == ` NaN` ? connectionVars.port : this.port,
      database: this.database ?? connectionVars.database,
      username: this.userName ?? connectionVars.username,
      password: this.password ?? connectionVars.password,
      autoLoadEntities: true,
      migrationsTableName: 'migrations_typeorm',
      entities: ['dist/**/*.entity{.js,.ts}'],
      migrations: ['dist/core/database/migrations/**/*{.js,.ts}'],
      sicronize: false,
    };

    if (this.type == 'mssql') {
      connection['extra'] = {
        trustServerCertificate: true,
      };
    }

    return connection;
  }

  private static getEnv(connection: ConnectionEnum, variable: string) {
    return `${variable.toUpperCase()}_${connection.toUpperCase()}`;
  }
}
