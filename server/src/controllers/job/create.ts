import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../utils/prismaClient";

const createJob = async (req: Request, res: Response, next: NextFunction) => {
  const { jobTitle, jobDescription, type, location, category, applyUrl } =
    req.body;
  const { user, company } = req;

  if (!user) {
    return res.status(400).json({ message: "User not defined" });
  } else if (!company) {
    return res.status(400).json({ message: "Company not defined" });
  }

  try {
    await prismaClient.job.create({
      data: {
        jobTitle,
        jobDescription,
        type,
        location,
        category,
        applyUrl,
        ownerId: user.id,
        companyId: company.id,
      },
    });
    res.status(200).json({ message: "Success" });
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export default createJob;
