import express from "express";
import AllUser from "../DbModel/UserModel.js";

export const UserRoutes = express.Router();

UserRoutes.get("/", async (req, res) => {
  try {
    const response = await AllUser.find();
    res.status(200).send({ status: 200, message: "success", data: response });
  } catch (error) {
    res.status(400).send({ status: 400, message: "something went wrong..." });
  }
});

UserRoutes.post("/adduser", async (req, res) => {
  try {
    const data = req.body;
    const response = await AllUser.create(data);
    res
      .status(200)
      .send({ status: 200, message: "Add data Successfully", data: response });
  } catch (error) {
    res.status(400).send({ status: 400, message: "something went wrong..." });
  }
});

UserRoutes.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await AllUser.findByIdAndDelete(id);
    res
      .status(200)
      .send({
        status: 200,
        message: "Delete data Successfully",
        data: response,
      });
  } catch (error) {
    res.status(400).send({ status: 400, message: "something went wrong..." });
  }
});

UserRoutes.put("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = await AllUser.findByIdAndUpdate(id, data);
    res
      .status(200)
      .send({
        status: 200,
        message: "Update data Successfully",
        data: response,
      });
  } catch (error) {
    res.status(400).send({ status: 400, message: "something went wrong..." });
  }
});
