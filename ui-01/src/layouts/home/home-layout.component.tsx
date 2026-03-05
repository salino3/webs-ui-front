import type React from "react";
import { AdvertisingFooter, Aside, Header } from "../../common-app";
import { HomePage } from "../../pods";
import "./home-layout.styles.scss";

export const HomeLayout: React.FC = () => {
  return (
    <div className="rootHomeLayout">
      <Header />
      <div className="containerBodyLayout">
        <Aside />
        <HomePage />
      </div>
      <AdvertisingFooter />
    </div>
  );
};
