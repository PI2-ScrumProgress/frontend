import api from "../config/api";

export interface BacklogElement {
  id: string;
  title: string;
  status: string;
  elementType: string;
}

export async function getBacklogElements(): Promise<BacklogElement[]> {
  try {
    const response = await api.get<BacklogElement[]>("/backlog-elements");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
}
