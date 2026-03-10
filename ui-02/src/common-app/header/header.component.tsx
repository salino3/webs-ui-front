import type React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Carrousel } from "../carrousel";
import { routesApp } from "../../router";
import "./header.styles.scss";

export const Header: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ minWidth: "600px" });

  return (
    <div className="rootHeader">
      <div className="boxLeft">
        <div className="boxImage">
          <img src="../../../public/test_image.png" alt="Test Image" />
        </div>
        <h2>Header Page</h2>
        <button>Log out</button>
      </div>
      <div className="boxRight">
        <nav>
          {!isMobile ? (
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
          ) : (
            <>
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
            </>
          )}
        </nav>
      </div>
    </div>
  );
};
