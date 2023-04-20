import {Body, Controller, Get, OnUndefined, Param, Post} from 'routing-controllers';
import 'reflect-metadata';
import {Form} from "../model/form";

@Controller()
export class FormController {
    @Get('/forms/:id')
    getOne (@Param('id') id: number) {
        return 'This action returns form #' + id;
    }

    @Post('/forms/:id')
    @OnUndefined(204)
    postOne (@Param('id') id: number, @Body() info: Form) {
        console.log(JSON.stringify(info));
    }
}
