import React from "react";
import { Heading } from "./heading";
import { Button, type ButtonProps } from "./button";

export interface PanelHeaderProps {
  heading: string;
  children?: React.ReactNode;
}

export interface PanelIconProps {
  children: React.ReactNode;
}

export const PanelIcon = ({ children }: PanelIconProps) => {
  return <div className="mr-2">{children}</div>;
};

export const PanelHeaderButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export const PanelHeader = ({ heading, children }: PanelHeaderProps) => {
  return (
    <div className="sticky top-0 w-full z-10">
      <div className="bg-panelHeader text-sm p-3 px-5 text-foreground flex justify-between items-center border-b-2 border-panelHeader-border">
        <Heading size="default">{heading}</Heading>
        {children && <div className="flex items-center gap-4">{children}</div>}
      </div>
    </div>
  );
};
