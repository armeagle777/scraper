import "reflect-metadata"
import { DataSource } from "typeorm"

import { Link } from "./entity/Link"
import { MonitoringRequest } from "./entity/MonitoringRequest"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "P@ssw0rd555",
    database: "scraper",
    synchronize: true,
    logging: false,
    entities: [Link,MonitoringRequest],
    migrations: [],
    subscribers: [],
})
