import React from "react";

interface HeightProps {
  height: "sm" | "md" | "lg";
}

const DynamicSpacer = ({ height }: HeightProps) => {
  const heightMap = {
    sm: 4,
    md: 8,
    lg: 12,
  };

  return <div className={`h-${heightMap[height]}`} />;
};

export default DynamicSpacer;
