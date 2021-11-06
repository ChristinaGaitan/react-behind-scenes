import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");

  return <p>{props.show ? "This is new!" : ""}</p>;
};

// Only rerenders this component if props.show changes
// Reacts saves previous props values
// Compares with new props
// It has some performance cost,
// use it only on components with a lot of nested components
export default React.memo(DemoOutput);
