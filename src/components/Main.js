import React from "react";

// The main container includes the main info on each page

function Main(props) {
    return (
        <main>{props.children}</main>
    );
}

export default Main;