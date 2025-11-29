import type { ComponentType } from "react";

declare module "*.md" {
  // Named exports
  export const attributes: Record<string, any>;
  export const react: ComponentType;

  // Default export: objeto con { attributes, react }
  const content: {
    attributes: Record<string, any>;
    react: ComponentType;
  };

  export default content;
}
