import "./Button.css";

function Button({ className, children, onClick }) {
  const classNames = `Button ${className}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
