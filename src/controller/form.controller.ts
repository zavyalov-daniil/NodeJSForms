import { Get, Route, Tags, Post as PostMethod, Body, Path } from "tsoa";
import { FormEntity } from '../entity/form-entity'
import { IFormPayload } from "../repository/post.repository";

@Route("forms")
@Tags("Form")
export default class FormController {
    @Get("/")
    public async getForm(): Promise<Array<FormEntity>> {
        return null//getPosts()
    }

    @PostMethod("/")
    public async createForm(@Body() body: IFormPayload): Promise<FormEntity> {
        return null//createPost(body)
    }

    @Get("/:id")
    public async getFormById(@Path() id: string): Promise<FormEntity | null> {
        return null//getPost(Number(id))
    }
}

/*export class FormController {

    private formRepository = AppDataSource.getRepository(FormEntity);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.formRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.formRepository.findOneBy({ id: parseInt(request.params.id) });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.formRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.formRepository.findOneBy({ id: parseInt(request.params.id) });
        if (!userToRemove) throw new Error('User not found');
        await this.formRepository.remove(userToRemove);
    }
}
import {Body, Controller, Get, JsonController, OnUndefined, Param, Post} from 'routing-controllers';
import 'reflect-metadata';
import { Form } from "../model/form";

import express, { Router, Request, Response } from "express";
import { FormEntity } from "../entity/form-entity";

import AppDataSource from "../../config/orm-config";
import {aaa} from "../model/aaa";
const app = express();
app.use(express.json());

@JsonController()
export class FormController {

    private formRepository = AppDataSource.getRepository(FormEntity);

    @Get('/forms/:id')
    @OnUndefined(404)
    async getOne (@Param('id') id: number): Promise<String> {
        return 'This action returns form #' + id;
    }

    @Post('/formss')
    async postOne(@Body() form: aaa): Promise<String> {
        //let ab: FormEntity = new FormEntity();
        //let entity: FormEntity = await this.formRepository.save(a);
        return "hui";
    }
}*/
