import "./Button.scss";
import React from "react";

export const ViewMore = () => {
  return <button className="viewmore">View More</button>;
};

interface ButtonWithIconProps {
  label: string;
  icon: JSX.Element;
  onClick?: () => void;
}
export const ButtonWithIcon = ({
  label,
  icon,
  onClick,
}: ButtonWithIconProps) => {
  return (
    <button className="button-with-icon" onClick={() => onClick()}>
      <div className="text">{label}</div>
      <div className="icon">{icon}</div>
    </button>
  );
};
