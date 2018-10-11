import React from "react";

const AuthButton = ({className, children, onClick, href }) => (
  <button
    onClick={onClick}
    className={className}
    href={href}
  >
    {children}
  </button>
);

export default AuthButton;





