import React from "react";
import classNames from "classnames";

export const FlexBox = ({ children, spacing, column, center, ...rest }) => {
  return (
    <section
      className={classNames("flexbox", {
        flexboxColumn: column,
        flexboxCenter: center,
      })}
      style={{ gap: `${spacing}px` }}
      {...rest}
    >
      {children}
    </section>
  );
};
