import React from "react";

export default function FunComp(props) {
  return (
    <div className="alert alert-success">
      <h1>Function Components Demo</h1>
      <p>Welcome to {props.renderFullName}</p>
      <p>Company: {props.renderCompany}</p>
    </div>
  );
}
