import type React from "react";
import { Link } from "react-router-dom";
import { Carrousel } from "../carrousel";
import { routesApp } from "../../router";
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
        <button>Log out</button>
      </div>
      <div className="boxRight">
        <nav className="navCarrousel">
          <Carrousel>
            {Array.from({ length: 7 }, (_, index: number) => (
              <li key={index} className={`linkNav linkNav-${index + 1}`}>
                <Link
                  to={
                    index === 0
                      ? routesApp.root
                      : routesApp.page(String(index + 1))
                  }
                >
                  {index === 0 ? "Home Page" : `Link Page ${index + 1}`}
                </Link>
              </li>
            ))}
          </Carrousel>
        </nav>
        <nav className="navDesktop">
          {Array.from({ length: 7 }, (_, index: number) => (
            <li key={index} className={`linkNav linkNav-${index + 1}`}>
              <Link
                to={
                  index === 0
                    ? routesApp.root
                    : routesApp.page(String(index + 1))
                }
              >
                {index === 0 ? "Home Page" : `Link Page ${index + 1}`}
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </div>
  );
};
