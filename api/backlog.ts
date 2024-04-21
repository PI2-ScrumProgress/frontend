import api from "./config/api";

interface TaskCreateResponse {
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
): Promise<TaskCreateResponse> {
  try {
    const response = await api.post<TaskCreateResponse>("tasks/create", {
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
