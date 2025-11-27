//JSX version
interface ISection {
  className?: string;
  content: string;
}
const Section = (props: ISection) => {
  return <section className={props.className}>{props.content}</section>;
};

export default Section;
