import { NextFunction, Request, Response } from "express";

async function createUser(req: Request, userService: any) {
  const { fullName, email, password, role } = req.body;
  return await userService.create({
    email,
    fullName,
    password,
    role,
  });
}

const createUserMiddleware = (userService: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.user = await createUser(req, userService);
      next();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
};

const handleCreateUser = (userService: any) => {
  return async (req: Request, res: Response) => {
    try {
      const user = await createUser(req, userService);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
};

export { createUserMiddleware, handleCreateUser };
