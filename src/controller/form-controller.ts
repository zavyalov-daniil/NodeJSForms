import {Body, Controller, Get, OnUndefined, Param, Post} from 'routing-controllers';
import 'reflect-metadata';
import { Form } from "../model/form";

import express, { Router, Request, Response } from "express";
import { FormEntity } from "../entity/form-entity";

import AppDataSource from "../../config/orm-config";
const app = express();
app.use(express.json());

@Controller('/forms')
export class FormController {

    private formRepository = AppDataSource.getRepository(FormEntity);

    @Get('/forms/:id')
    @OnUndefined(404)
    getOne (@Param('id') id: number) {
        return 'This action returns form #' + id;
    }

    @Post('/forms/:id')
    @OnUndefined(204)
    postOne (@Param('id') id: number, @Body() info: Form) {
        console.log(JSON.stringify(info));
    }
}
