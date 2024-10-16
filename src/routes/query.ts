import { Router, Request, Response } from "express";
import Query from "../models/querymodel";
const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    console.log("REQUEST BODY",req);
    const data = req.body;
    console.log("DATA",data);
    const query = await Query.create(data);
    res.status(200).json({ query });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ERROR OCCURED WHILE POSTING QUERY" });
  }
});

export default router;
