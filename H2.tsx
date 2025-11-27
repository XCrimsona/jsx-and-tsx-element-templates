import { IHeadingProps } from "./props/heading-props.tsx";

const H2 = ({ className, children }: IHeadingProps) => {
  return <h1 className={className}>{children}</h1>;
};

export default H2;
