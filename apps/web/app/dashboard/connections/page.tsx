import { PanelHeader, PanelHeaderButton, PanelIcon } from "@stackai/ui";
import { Plus } from "lucide-react";

export default async function Connections() {
  return (
    <PanelHeader heading="Connections">
      {/* Disabled because we can't add new connextion from this app*/}
      <PanelHeaderButton disabled={true}>
        <PanelIcon>
          <Plus />
        </PanelIcon>
        New Connection
      </PanelHeaderButton>
    </PanelHeader>
  );
}
