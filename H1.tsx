import { IHeadingProps } from "./props/heading-props.tsx";

const H1 = ({ className, children }: IHeadingProps) => {
  return <h1 className={className}>{children}</h1>;
};

export default H1;
