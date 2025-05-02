import apiClient from "./apiClient";

export interface UrlResponse {
  originalUrl: string;
  shortUrl: string;
  shortCode: string;
  clickCount: number;
  createdAt: string;
}

export const encodeUrl = async (originalUrl: string): Promise<UrlResponse> => {
  const response = await apiClient.post("/encode", { originalUrl });
  return response.data;
};

export const decodeUrl = async (
  shortCode: string
): Promise<{ originalUrl: string }> => {
  const response = await apiClient.get(`/decode/${shortCode}`);
  return response.data;
};

export const getUrlStats = async (shortCode: string): Promise<UrlResponse> => {
  const response = await apiClient.get(`/statistic/${shortCode}`);
  return response.data;
};

export const getAllUrls = async (): Promise<UrlResponse[]> => {
  const response = await apiClient.get("/list");
  return response.data;
};

export const searchUrls = async (query: string): Promise<UrlResponse[]> => {
  const response = await apiClient.get("/search", { params: { q: query } });
  return response.data;
};
