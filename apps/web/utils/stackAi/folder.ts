import stackAIApi from "./api";

export const getAllFolders = async () => {
  console.log("stack APIs:", stackAIApi);
  const { data } = await stackAIApi("/folders");
};
