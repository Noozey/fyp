import express from "express";

const tokenRouter = express.Router();

tokenRouter.get("/", async (req, res) => {
  res.send("Token generation endpoint");
});

export { tokenRouter };
