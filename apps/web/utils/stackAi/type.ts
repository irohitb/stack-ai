export interface Connection {
  connection_id: string;
  connection_provider: string;
  connection_provider_data: {
    access_token: string;
    refresh_token: string;
    scope: string;
    token_type: string;
    can_be_knowledge_base: boolean;
  };
  created_at: string; // ISO date string
  name: string;
  org_id: string;
  share_with_org: boolean;
  updated_at: string; // ISO date string
  user_id: string;
}

type InodePath = {
  path: string;
};

export type Resource = {
  knowledge_base_id: string;
  created_at: string; // ISO date string
  modified_at: string; // ISO date string
  indexed_at: string | null; // ISO date string or null
  inode_type: "directory" | "file";
  resource_id: string;
  inode_path: InodePath;
  inode_id: string | null;
  content_hash?: string; // ISO date string, only for file type
  content_mime?: string; // MIME type, only for file type
  size?: number; // size in bytes, only for file type
  status?: "resource"; // only for file type
};
