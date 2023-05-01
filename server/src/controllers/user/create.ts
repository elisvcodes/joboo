import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../utils/prismaClient";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { fullName, email, password, role } = req.body;
  try {
    const user = await prismaClient.user.create({
      data: {
        email,
        fullName,
        password,
        role,
      },
    });
    req.user = user;
    next();
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export default createUser;
