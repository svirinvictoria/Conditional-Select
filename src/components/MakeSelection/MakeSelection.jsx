import React from "react";
import "../SelectItem/SelectItem.css";

const MakeSelection = (props)=>{
    return (
      <div>
        <select className="border-control" onChange={props.onChangeHandler}>
          {props.items.map((type) => {
            return <option key={type}>{type}</option>;
          })}
        </select>
      </div>
    );
}

export default MakeSelection;