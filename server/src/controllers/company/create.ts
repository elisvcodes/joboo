import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../utils/prismaClient";

const createCompany = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { companyTitle, companyDescription, logo, website } = req.body;
  const user = req.user;

  if (!user) {
    return res.status(400).json({ message: "User not defined" });
  }

  try {
    const company = await prismaClient.company.create({
      data: {
        companyTitle,
        companyDescription,
        logo,
        website,
        userId: user.id,
      },
    });
    req.company = company;
    return next();
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export default createCompany;
