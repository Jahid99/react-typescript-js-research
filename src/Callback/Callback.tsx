import React, { useState } from "react";

interface Props {
  children: ({
  }) => JSX.Element | null;
}

export const Callback: React.FC<Props> = ( children ) => {
  console.log("Nice", children.children)

  return <h2>{children.children(1)}</h2>;
};
