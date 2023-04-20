import dotenv from 'dotenv'
import { useExpressServer } from 'routing-controllers';
import { FormController } from './controller/form-controller';
import bodyParser from "body-parser";
import { GlobalErrorHandler } from "./middleware/global-error-handler";
import express, { Express } from "express";
import httpContext from "express-http-context";

dotenv.config();
const port = process.env.PORT;

const app: Express = express();
app.use(bodyParser.json());
app.use(httpContext.middleware);
useExpressServer(app, {
     controllers: [FormController],
     middlewares: [GlobalErrorHandler],
     defaultErrorHandler: false
});


app.use(bodyParser.json());
app.listen(port, () => console.log(`Running on port ${port}`))
