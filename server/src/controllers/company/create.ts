import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../utils/prismaClient";

const createCompany = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description, logo, website } = req.body;
  const user = req.user;
  try {
    const company = await prismaClient.company.create({
      data: {
        title,
        description,
        logo,
        website,
        userId: user.id,
      },
    });
    res.status(200).json({ message: "Success" });
    req.company = company;
    return next();
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export default createCompany;
