import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../utils/prismaClient";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { title, description, type, location, category } = req.body;
  try {
    await prismaClient.job.create({
      data: {
        title,
        description,
        type,
        location,
        category,
      },
    });
    res.status(200).json({ message: "Success" });
    return next();
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export default createUser;
