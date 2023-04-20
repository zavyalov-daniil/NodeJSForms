import dotenv from 'dotenv'
import { createExpressServer } from 'routing-controllers';
import { FormController } from './controller/form-controller';

dotenv.config();
const port = process.env.PORT;

const app = createExpressServer({
     controllers: [FormController],
});

app.listen(port, () => console.log(`Running on port ${port}`))
