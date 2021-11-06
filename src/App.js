import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  // use useMemo only if the amount of data is big
  const listItems = useMemo(() => [5,3,6,9,2], [])

  console.log("APP RUNNING");

  const toggleParagraphHandle = useCallback(() => {
    // When allowToggle changes that's the value that
    // react saves to make useCallback works
    if(allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  },[allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} items={listItems} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandle}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
