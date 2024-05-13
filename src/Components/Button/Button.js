import React from "react";
import "./Button.css";

export default Button;
function Button({ text }) {
  return <button className="brown-button">{text}</button>;
}
