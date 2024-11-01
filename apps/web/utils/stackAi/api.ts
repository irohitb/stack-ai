import axios from "axios";
import { Connection, Resource } from "./type";
import { SUPABASE_TOKEN } from "@/constants/local-storage";

const token =
  typeof window !== "undefined" ? localStorage.getItem(SUPABASE_TOKEN) : "";
const stackAIApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getGoogleDriveConnection = async (): Promise<Connection> => {
  const response = await stackAIApi.get(
    "/connections?connection_provider=gdrive&limit=1"
  );
  const connection = response.data[0];
  return connection;
};

export const getResourceForTheConnection = async (
  connectionId: string
): Promise<Resource[]> => {
  const { data } = await stackAIApi.get(
    `/connections/${connectionId}/resources/children`
  );
  return data;
};

export const getSubDirectoryInFolder = async () => {};
export default stackAIApi;
