import FormController from "../controller/form.controller";
import express from "express";

const router = express.Router();

router.get("/", async (_req, res) => {
    const controller = new FormController();
    const response = await controller.getForm();
    return res.send(response);
});

router.post("/", async (req, res) => {
    const controller = new FormController();
    const response = await controller.createForm(req.body);
    return res.send(response);
});

router.get("/:id", async (req, res) => {
    const controller = new FormController();
    const response = await controller.getFormById(req.params.id);
    if (!response) res.status(404).send({message: "No comment found"})
    return res.send(response);
});

export default router;