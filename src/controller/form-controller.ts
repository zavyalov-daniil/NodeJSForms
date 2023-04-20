import { Controller, Get, Param } from 'routing-controllers';
import 'reflect-metadata';

@Controller()
export class FormController {
    @Get('/forms/:id')
    getOne (@Param('id') id: number) {
        return 'This action returns form #' + id;
    }
}
