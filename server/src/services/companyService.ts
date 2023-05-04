import { Company } from "@prisma/client";
import { prismaClient } from "../utils/prismaClient";

export const companyService = {
  create: async (companyData: Company) => {
    return await prismaClient.company.create({ data: companyData });
  },
};
