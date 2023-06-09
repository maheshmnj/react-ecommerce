import * as React from "react";

const Button = (props: any) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
