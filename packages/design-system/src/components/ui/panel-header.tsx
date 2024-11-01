import React from "react";
import { Heading } from "./heading";

export interface Props {
  heading: string;
}

export const PanelHeader = ({ heading }: Props) => {
  return (
    <div className="w-full">
      <div className="bg-panelHeader text-sm p-3 px-5 text-foreground flex gap-3 items-center border-b-2 border-panelHeader-border">
        <Heading size="default">{heading}</Heading>
      </div>
    </div>
  );
};
