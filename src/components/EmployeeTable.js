import React, { useState, useEffect } from "react";
import EmployeeRow from "./EmployeeRow";
import { Container, Table } from 'react-bootstrap';
import NameSortLink from "./NameSortLink.js";
import NameFilterInput from "./NameFilterInput";
import compareNames from "../utils/compareNames";


function EmployeeTable(props) {
    // This becomes "this.state = {}"
    const [filteredEmployees, setFilteredEmployees] = useState(props.employees);
    const [sortedEmployees, setSortedEmployees] = useState(filteredEmployees);
    const [filterState, setFilterState] = useState("");
    const [sortDirection, setSortDirection] = useState(1);
    // Use effect goes from useEffect to componentDidMount (for startup)
    // and your change function for each update
    useEffect(function () {
        let filteredRecords = props.employees;
        if (filterState !== '') {
            filteredRecords = props.employees
                .filter(employeeRecord => {
                    return employeeRecord.name.first.toLowerCase().startsWith(filterState)
                        || employeeRecord.name.last.toLowerCase().startsWith(filterState);
                });
        }
        setFilteredEmployees(filteredRecords);
    }, [props.employees, filterState]);
    useEffect(function () {
        const filteredEmployeesCopy = filteredEmployees.slice(0);
        filteredEmployeesCopy.sort(compareNames(sortDirection));
        setSortedEmployees(filteredEmployeesCopy);
    }, [filteredEmployees, sortDirection]);
    // These stay basically the same. They just use this.setState
    function onFilterChange(event) {
        const { value } = event.target;
        setFilterState(value);
    }
    function toggleSortDirection(event) {
        event.preventDefault();
        event.stopPropagation();
        setSortDirection(-1 * sortDirection);
    }
    return (
        <>
        <Container className="my-5">
            <NameFilterInput filterState={filterState} onFilterChange={onFilterChange}></NameFilterInput>

            <Table striped bordered hover className="my-5">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th><NameSortLink toggleSortDirection={toggleSortDirection} /></th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedEmployees.map(employeeRecord =>
                            (<EmployeeRow
                                employeeRecord={employeeRecord}
                                key={employeeRecord.id.value} />))
                    }
                </tbody>
            </Table>
            </Container>
        </>
    )
}
export default EmployeeTable;