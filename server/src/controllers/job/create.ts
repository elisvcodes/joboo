import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../utils/prismaClient";

const createJob = async (req: Request, res: Response, next: NextFunction) => {
  const { jobTitle, jobDescription, type, location, category } = req.body;
  const { user, company } = req;
  try {
    await prismaClient.job.create({
      data: {
        jobTitle,
        jobDescription,
        type,
        location,
        category,
        ownerId: user.id,
        companyId: company.id,
      },
    });
    res.status(200).json({ message: "Success" });
    return next();
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export default createJob;