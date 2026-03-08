import type React from "react";
import { Header } from "../../common-app";
import "./home-layout.styles.scss";

export const HomeLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="rootHomeLayout">
      <Header />
      {children}
    </div>
  );
};
