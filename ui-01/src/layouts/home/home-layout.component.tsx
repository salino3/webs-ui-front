import type React from "react";
import { Header } from "../../common-app";
import "./home-layout.styles.scss";

export const HomeLayout: React.FC = () => {
  return (
    <div className="rootHomeLayout">
      <Header />
      <h1>rootHomeLayout</h1>
    </div>
  );
};
