import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log("DemoOutput Button");

  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// Here memo does not work because the onClick function is
// a new one everytime the main component rerenders
// in DemoOutput works because `false` is a primitive value
// it doesn't work with arrays, objects and functions by default
// we need to use useCallback for this cases (App component)
export default React.memo(Button);
