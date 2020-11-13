import React from "react";
function NameSortLink(props) {
    return <a href="#home" onClick={props.toggleSortDirection}>Full Name</a>;
}
export default NameSortLink;