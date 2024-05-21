import api from "../config/api";

export interface BacklogElement {
  id: string;
  projectId: string;
  userId: string;
  elementType: string;
  title: string;
  description: string;
  status: string;
  cressationDate: string;
  dueDate: string;
  completionDate: string;
}

export async function getBacklogElements(): Promise<BacklogElement[]> {
  try {
    const response = await api.get<BacklogElement[]>("/backlog-elements");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
}
