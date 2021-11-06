import React, { useMemo } from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  const { items } = props;

  // Sorting it's expensive that's why we could use useMemo
  // to save some resources
  const sortedList = useMemo(() => {
    console.log("Items sorted!");
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div>
      <p>{props.show ? "This is new!" : ""}</p>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Only rerenders this component if props.show changes
// Reacts saves previous props values
// Compares with new props
// It has some performance cost,
// use it only on components with a lot of nested components
export default React.memo(DemoOutput);
