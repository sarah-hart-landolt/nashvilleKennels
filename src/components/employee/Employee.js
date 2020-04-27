import React from "react"

export default ({employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{location.name}</div>
    </section>
)

