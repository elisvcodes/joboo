import { useMutation } from "@tanstack/react-query";
import { postData } from "..";

const createFirstJob = async (data: Object) => {
  await postData("/job/firstjob/create/", data);
};

export const useCreateFirstJob = () => {
  return useMutation({ mutationFn: createFirstJob });
};
