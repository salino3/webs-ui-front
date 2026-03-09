import type React from "react";
import { Carrousel } from "../carrousel";
import "./header.styles.scss";
import { routesApp } from "../../router";
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
          <Carrousel>
            {Array.from({ length: 8 }, (_, index: number) => (
              <li key={index} className={`linkNav linkNav-${index + 1}`}>
                <a
                  href={
                    index === 0
                      ? routesApp.root
                      : routesApp.page(String(index + 1))
                  }
                >
                  {index === 0 ? "Home Page" : `Link Page ${index + 1}`}
                </a>
              </li>
            ))}
          </Carrousel>
          {/* <li>
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
          </li> */}
        </nav>
      </div>
    </div>
  );
};
