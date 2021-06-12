import React from "react";

function ContentContainer(props) {
    return (
        <section className="content">{props.children}</section>
    );
}

export default ContentContainer;