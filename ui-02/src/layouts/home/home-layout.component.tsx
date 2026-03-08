import type React from "react";
import "./home-layout.styles.scss";

export const HomeLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="rootHomeLayout">{children}</div>;
};
