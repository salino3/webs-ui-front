import type React from "react";
import { BodyHome } from "./components";
import "./home-page.styles.scss";

const HomePage: React.FC = () => {
  return (
    <div className="rootHomepage">
      <h1>Home Page</h1>
      <BodyHome />
    </div>
  );
};

export default HomePage;
