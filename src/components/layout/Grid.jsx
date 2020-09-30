import React from "react";
import classNames from "classnames";

export const Grid = ({ children, spacing, row, column, ...rest }) => {
  return (
    <section
      // className={row ? "grid grid-row" : "grid"}
      className={classNames("grid", {
        gridRow: row,
        gridColumn: column,
      })}
      style={{ gridRowGap: `${spacing}px`, gridColumnGap: `${spacing}px` }}
      {...rest}
    >
      {children}
    </section>
  );
};
