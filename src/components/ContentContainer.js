import React from "react";

// The main container for the page

function ContentContainer(props) {
    return (
        <section className="content">{props.children}</section>
    );
}

export default ContentContainer;