//JSX version
const DivStyle = (props) => {
  return (
    <div style={props.CSSProperties} className={props.className}>
      {props.children}
    </div>
  );
};

export default DivStyle;
