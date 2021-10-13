import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from './src/todos/todo.entity';
const isDevelopment = process.env.NODE_ENV !== 'prod';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Todo],
  migrations: [__dirname+ '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  synchronize: isDevelopment,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
