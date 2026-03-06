import React, { useState } from "react";
import "./aside.styles.scss";

export const Aside: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<string>("250px");
  return (
    <div className="rootAside" style={{ flex: `0 1 ${isExpanded}` }}>
      <div className="boxBtnSideBar">
        <div
          className="spacer"
          style={{ width: isExpanded ? "180px" : "0px" }}
        />
        <button
          className="btnSideBar"
          onClick={() => setIsExpanded(!!isExpanded ? "" : "250px")}
        >
          {!!isExpanded ? "<<" : ">>"}
        </button>
      </div>
      <h4 style={{ fontSize: `${!!isExpanded ? "22px" : "12px"}` }}>Aside</h4>
      <ul
        style={{
          opacity: isExpanded ? 1 : 0,
        }}
      >
        {Array.from({ length: 7 }, (_, i) => i).map((num: number) => (
          <li
            key={num}
            style={{
              width: isExpanded ? "100%" : "0%",
            }}
          >
            Element {num + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};
