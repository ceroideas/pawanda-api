import User from 'src/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Profile1680287054887 } from './migrations/1680287054887-Profile';
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'pawanda',
  migrations: [Profile1680287054887],
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
