declare module "*.md" {
  import type { ComponentType } from "react";

  export const attributes: Record<string, any>;
  export const react: ComponentType;

  const content: {
    attributes: Record<string, any>;
    react: ComponentType;
  };

  export default content;
}
