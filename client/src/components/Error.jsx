import './error.scss';
const Error = (props) => {
  return (
    <div {...props} className="error">
      {props.children}
    </div>
  );
};
export default Error;
