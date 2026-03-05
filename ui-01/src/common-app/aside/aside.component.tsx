import React, { useState } from "react";
import "./aside.styles.scss";

export const Aside: React.FC = () => {
  const [widthSideBar, setWidthSideBar] = useState<string>("250px");
  return (
    <div className="rootAside" style={{ flex: `0 1 ${widthSideBar}` }}>
      <button onClick={() => setWidthSideBar(!!widthSideBar ? "" : "250px")}>
        {!!widthSideBar ? "<<" : ">>"}
      </button>
      <h4 style={{ fontSize: `${!!widthSideBar ? "22px" : "12px"}` }}>Aside</h4>
    </div>
  );
};
