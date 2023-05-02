import express from "express";
import FormsRouter from "./forms.router";
import HomeController from "../controller/home.controller";

const router = express.Router();

router.get("/home", async (_req, res) => {
    const controller = new HomeController();
    const response = await controller.getMessage();
    return res.send(response);
});

router.use("/forms", FormsRouter)

export default router;
