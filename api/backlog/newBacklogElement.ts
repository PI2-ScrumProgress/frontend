import api from "../config/api";

interface BacklogElementResponse {
  id: string;
  projectId: string;
  elementType: string;
  title: string;
  description: string;
  status: string;
  creationDate: string;
  completionDate: string;
}

export async function createTask(
  projectId: string,
  title: string,
  description?: string,
  priority?: string,
  dueDate?: string
): Promise<BacklogElementResponse> {
  try {
    const response = await api.post<BacklogElementResponse>("tasks/create", {
      projectId,
      title,
      description,
      priority,
      dueDate,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
}

export async function createStory(
  projectId: string,
  title: string,
  description?: string,
  priority?: string,
  acceptanceCriteria?: string,
  storyPoints?: number
): Promise<BacklogElementResponse> {
  try {
    const response = await api.post<BacklogElementResponse>(
      "user-stories/create",
      {
        projectId,
        title,
        description,
        priority,
        acceptanceCriteria,
        storyPoints,
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
}
