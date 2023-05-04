import { User } from "@prisma/client";
import { prismaClient } from "../utils/prismaClient";

export const userService = {
  create: async (userData: User) => {
    return await prismaClient.user.create({ data: userData });
  },
};
