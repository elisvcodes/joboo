import { Request, Response } from "express";

const createUser = (req: Request, res: Response) => {
  const {} = req.body;
  try {
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};
