import React from "react";
function NameFilterInput(props) {
    return (
        <div>
            <label htmlFor="filter-input">Filter List By Name</label>
            <input 
            type="text"
            value={props.filterState}
            onChange={props.onFilterChange}
            name="filterInput"
            id="filter-input" />
        </div>
    )
}
export default NameFilterInput;