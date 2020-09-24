import React from "react";

export const Grid = ({ children, spacing, row }) => {
  return (
    <section
      className={row ? "grid grid-row" : "grid"}
      style={{ gridRowGap: `${spacing}px` }}
    >
      {children}
    </section>
  );
};
