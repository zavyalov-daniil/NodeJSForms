import { Get, Route } from "tsoa";

interface HomeResponse {
    message: string;
}

@Route("home")
export default class HomeController {
    @Get("/")
    public async getMessage(): Promise<HomeResponse> {
        return {
            message: "Оно живое",
        };
    }
}
