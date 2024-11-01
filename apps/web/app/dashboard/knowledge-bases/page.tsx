"use client";
import {
  getGoogleDriveConnection,
  getResourceForTheConnection,
} from "@/utils/stackAi/api";
import { PanelHeader, PanelHeaderButton, PanelIcon } from "@stackai/ui";
import { Plus } from "lucide-react";
import { useQuery } from "react-query";

export default function Connections() {
  const { data, isLoading, error } = useQuery(
    "google-connections",
    async () => {
      const data = await getGoogleDriveConnection();

      console.log("DATA:", data);
      const resource = await getResourceForTheConnection(data.connection_id);
    }
  );

  return (
    <>
      <PanelHeader heading="Knowledge Base">
        <PanelHeaderButton disabled={true}>
          <PanelIcon>
            <Plus />
          </PanelIcon>
          New Knowldedge Base
        </PanelHeaderButton>
      </PanelHeader>
    </>
  );
}
