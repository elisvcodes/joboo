import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../utils/prismaClient";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { fullName, email, password, role } = req.body;
  try {
    await prismaClient.user.create({
      data: {
        email,
        fullName,
        password,
        role,
      },
    });
    res.status(200).json({ message: "Success" });
    return next();
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export default createUser;
