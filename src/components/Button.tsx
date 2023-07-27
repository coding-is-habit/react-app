import React, { useState } from "react";

interface Props {
  children: string;
  color?: "primiary" | "success" | "danger";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "success" }: Props) => {
  let [alertVisible, setAlertVisibility] = useState(false);
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
