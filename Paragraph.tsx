//TSX version
interface IParagraphProps {
  className?: string;
  content: string;
}
const Paragraph = (props: IParagraphProps) => {
  return <p className={props.className}>{props.content}</p>;
};

export default Paragraph;
