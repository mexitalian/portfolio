import React from "react";
import { Card, Box } from "@radix-ui/themes";
import { BentoCardProps } from "../types.ts";

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = "",
  colSpan = "",
  rowSpan = "",
}) => {
  // We'll use style for colSpan/rowSpan if they are passed as raw grid values,
  // but in Radix Themes we'll likely handle the grid in the parent.
  // For now, let's keep it simple and use a Radix Card as the base.
  return (
    <Card
      size="3"
      variant="surface"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "var(--radius-6)", // Extra large radius for Bento look
        overflow: "hidden",
        position: "relative",
      }}
    >
      {children}
    </Card>
  );
};
