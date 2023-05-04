import { NextFunction, Request, Response } from "express";

async function createCompany(req: Request, companySerice: any) {
  const { companyTitle, companyDescription, logo, website } = req.body;
  const user = req.user;

  return await companySerice.create({
    companyTitle,
    companyDescription,
    logo,
    website,
    userId: user.id,
  });
}

const createCompanyMiddleware = (companyService: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user) {
      return res.status(400).json({ message: "User not defined" });
    }

    try {
      req.company = await createCompany(req, companyService);
      return next();
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  };
};

const handleCreateCompany = (companyService: any) => {
  return async (req: Request, res: Response) => {
    const user = req.user;
    if (!user) {
      return res.status(400).json({ message: "User not defined" });
    }

    try {
      const company = await createCompany(req, companyService);
      res.status(201).json(company);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  };
};

export { createCompanyMiddleware, handleCreateCompany };
