import { ReactNode } from "react";

export default interface TabType {
  id: number;
  name: string;
  icon?: string;
  color?: string;
  customIcon?: ReactNode;
  // Accessibility properties
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}
