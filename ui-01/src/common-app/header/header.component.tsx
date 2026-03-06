import type React from "react";
import "./header.styles.scss";

export const Header: React.FC = () => {
  return (
    <header className="rootHeader">
      <div className="boxLeft">
        <div className="boxIcon"></div>
        <h2>Title Header Page</h2>
      </div>
      <div className="boxRight">
        <nav>
          <a href="">link 1</a>
          <a href="">link 2</a>
          <a href="">link 3</a>
          <a href="">link 4</a>
        </nav>
      </div>
    </header>
  );
};
