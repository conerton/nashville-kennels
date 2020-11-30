import React from "react"
import "./Employee.css"

export const Employee = ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
<div className="employee__location">Location {employee.location}</div>
    </section>
)