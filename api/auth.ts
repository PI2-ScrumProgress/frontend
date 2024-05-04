import api from "./config/api";

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  try {
    const response = await api.post<LoginResponse>("/auth/login", {
      email,
      password,
    });
    const tokens = response.data;
    localStorage.setItem("accessToken", tokens.accessToken);
    localStorage.setItem("refreshToken", tokens.refreshToken);
    return tokens;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
}
