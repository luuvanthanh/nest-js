import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'manager',
    entities: ["dist/**/*.entity{ .ts,.js}"],
    synchronize: true,
}

export default config;