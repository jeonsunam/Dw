import styles from "./Button.module.css";
import classNames from "classnames";

function Button({ className, variant, isDiv, ...restProps }) {
  if (isDiv == "div") {
    // button 을 한개로만 닫았을 때 값을 하나 받아줘야한다.?
    return (
      <div
        {...restProps}
        className={classNames(
          styles.button,
          variant && styles[variant],
          className
        )}
      />
    );
  }

  // 객체의 키값을 동적으로 바꾸고 싶을때 ["round"]
  //   console.log(styles[variant]);
  // button 을 한개로만 닫았을 때 값을 하나 받아줘야한다.?
  return (
    <button
      {...restProps}
      className={classNames(
        styles.button,
        variant && styles[variant],
        className
      )}
    />
  );
  //   return <button children="버튼" className={classNames(styles.button)} />;
}

export default Button;
