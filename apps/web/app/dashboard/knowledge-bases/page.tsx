import { PanelHeader, PanelHeaderButton, PanelIcon } from "@stackai/ui";
import { Plus } from "lucide-react";

export default async function Connections() {
  return (
    <PanelHeader heading="Knowledge Base">
      <PanelHeaderButton>
        <PanelIcon>
          <Plus />
        </PanelIcon>
        New Knowldedge Base
      </PanelHeaderButton>
    </PanelHeader>
  );
}
