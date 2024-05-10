import api from "../config/api";

interface BacklogAssign {
  userId: string;
  backlogElementId: string;
}

export const assignBacklogElement = async (
  backlogElementId: string,
  userId: string
): Promise<BacklogAssign> => {
  try {
    const response = await api.get<BacklogAssign>(
      "backlog-assignments/assign",
      {
        params: {
          backlogElementId,
          userId,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};
