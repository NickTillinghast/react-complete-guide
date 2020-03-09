import React from "react";
import "./UserOutput.css";


const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p onClick={props.clicker}>Username: {props.userName} paragraph one</p>
            <p>paragraph two</p>
        </div>

    )
}
export default UserOutput;