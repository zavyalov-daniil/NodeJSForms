import { DataSource } from "typeorm";

import dotenv from "dotenv";
dotenv.config();

const AppDataSource =  new DataSource({
    type: "postgres",
    username: "postgres",
    password: "123",
    url: process.env.DATABASE_URI,
    logging: false,
    synchronize: true,
    entities: ["./src/entity/**/*.ts"],
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

AppDataSource
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })

export default AppDataSource;
