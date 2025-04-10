import React from "react";
const Square = (props) => {
    return (
        <div 
        onClick={props.onClick}
        style={{   
            border: "1px solid",
            height: "100px", 
            width:"50%", 
            display: "flex" ,
            justifyContent: "center",
            alignItems: "center"
        }} 
        className="square"
    >
        <h5 className="XO">{props.value}</h5>
    </div>
    );
};
export default Square; 