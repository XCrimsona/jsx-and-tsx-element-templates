import React from "react";
//TSX version
interface IDivProps {
  className: string;
  children: React.ReactNode;
}
const Div = ({ className, children }: IDivProps) => {
  return <div className={className}>{children}</div>;
};

export default Div;
