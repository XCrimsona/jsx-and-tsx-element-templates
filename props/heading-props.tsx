export interface IHeadingProps {
  className: string;

  //for text you can use either:
  children?: React.ReactNode;
  //or
  text?: string;

  //then remove the prop you aren't using
}
