import api from "../config/api";

export interface User {
  id: string;
  username: string;
  email: string;
}

export async function getUsers(): Promise<User[]> {
  try {
    const response = await api.get<User[]>("/users");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
}
