import React, { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

export const ReactWindow: React.FC = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 10, // Increased slightly for smoother fast-scrolling
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>
        TanStack Virtualized List
      </h2>

      <div
        ref={parentRef}
        className="list-container"
        style={{
          height: `500px`,
          width: `400px`,
          margin: "0 auto",
          overflow: "auto",
          border: "2px solid #3498db", // Highlighted border to see the container
          borderRadius: "8px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
                display: "flex",
                alignItems: "center",
                padding: "0 20px",
                borderBottom: "1px solid #f0f0f0",
                backgroundColor:
                  virtualItem.index % 2 === 0 ? "#fff" : "#f7f9fc",
                color: "#2c3e50",
                boxSizing: "border-box",
                fontWeight: "500",
              }}
            >
              Row Index:{" "}
              <span style={{ color: "#3498db", marginLeft: "5px" }}>
                {virtualItem.index}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
