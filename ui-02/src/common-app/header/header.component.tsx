import type React from "react";
import "./header.styles.scss";
// https://github.com/salino3/react-inifinite-carrousel-slide
export const Header: React.FC = () => {
  return (
    <div className="rootHeader">
      <div className="boxLeft">
        <div className="boxImage">
          <img src="" alt="" />
        </div>
        <h2>Header Page</h2>
        <button>Login</button>
      </div>
      <div className="boxRight">
        <nav>
          <li>
            <a href="">Link Page 1</a>
          </li>
          <li>
            <a href="">Link Page 2</a>
          </li>
          <li>
            <a href="">Link Page 3</a>
          </li>
          <li>
            <a href="">Link Page 4</a>
          </li>
          <li>
            <a href="">Link Page 5</a>
          </li>
          <li>
            <a href="">Link Page 6</a>
          </li>
          <li>
            <a href="">Link Page 7</a>
          </li>
        </nav>
      </div>
    </div>
  );
};
