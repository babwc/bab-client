import { CSSProperties } from "react";

import { BtnType } from "../../ts/types";

import "./style.scss";

interface Props {
  isSubmit?: boolean;
  handleClick?: () => void;
  animScale?: boolean;
  additionalStyle?: CSSProperties;
  disabled?: boolean;
  color?: string;
  children: React.ReactNode;
}

const Button = ({
  isSubmit = false,
  handleClick,
  animScale = true,
  disabled,
  additionalStyle,
  children,
}: Props) => {
  return (
    <button
      type={isSubmit ? BtnType.Submit : BtnType.Button}
      className={`button ${animScale && !disabled ? "active" : ""} ${
        disabled ? "disabled" : ""
      }`}
      disabled={disabled}
      style={additionalStyle}
      onClick={() => !disabled && handleClick && handleClick()} // just in case
    >
      {children}
    </button>
  );
};

export default Button;
