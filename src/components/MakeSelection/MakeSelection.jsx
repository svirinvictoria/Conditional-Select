import React from "react";
import "./MakeSelection.css";

const MakeSelection = (props)=>{
const classes = "border-control " + props.className;

  return (
    <select className={classes} onChange={props.onChangeHandler}>
      {props.items.map((type) => {
        return <option key={type}>{type}</option>;
      })}
    </select>
  );
}

export default MakeSelection;