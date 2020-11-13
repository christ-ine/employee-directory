import React from "react";


function EmployeeRow(props) {
    return (
        <>
            
                <tr>
                    <td><img src={props.employeeRecord.picture.medium} alt={props.employeeRecord.name.first} /></td>
                    <td>{props.employeeRecord.name.first} {props.employeeRecord.name.last}</td>
                    <td>{props.employeeRecord.phone}</td>
                    <td>{props.employeeRecord.email}</td>
                    <td>{props.employeeRecord.dob.date}</td>
                </tr>
            

        </>
    );
}
export default EmployeeRow;