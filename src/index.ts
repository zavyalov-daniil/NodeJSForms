import "reflect-metadata";
import dotenv from 'dotenv'
//import bodyParser from "body-parser";
import express, { Express } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import AppDataSource from "../config/orm-config";
import Router from "./routes";

const app: Express = express();
//app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);
app.use(Router);

dotenv.config();
const port = process.env.PORT;

AppDataSource
    .initialize()
    .then(() => {
        app.listen(port, () => console.log(`Running on port ${port}`))
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })

export default app;

/*useExpressServer(app, {
     controllers: [FormController],
     middlewares: [GlobalErrorHandler],
     defaultErrorHandler: false
});
app.use(httpContext.middleware);
*/
