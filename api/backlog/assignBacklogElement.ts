import api from "../config/api";
import { BacklogElement } from "./getBacklogElement";

export const assignBacklogElement = async (
  backlogElementId: string,
  userId: string
): Promise<BacklogElement> => {
  console.log(
    `Asignando elemento ${backlogElementId} al usuario ${userId} inside assignBacklogElement`
  );
  try {
    const response = await api.put<BacklogElement>("/backlog-elements/assign", {
      backlogElementId,
      userId,
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};
