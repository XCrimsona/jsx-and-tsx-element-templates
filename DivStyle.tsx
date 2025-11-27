import React from "react";
//TSX version
interface IDivProps {
  className: string;
  children: React.ReactNode;
  style: React.CSSProperties;
}
const DivStyle = ({ style, className, children }: IDivProps) => {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default DivStyle;
