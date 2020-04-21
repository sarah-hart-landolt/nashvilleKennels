import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Employee.css"
import { LocationContext } from "../location/LocationProvider"

export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    return (
        <div className="employees">
        {
            employees.map(emp => {
                const location = locations.find(loc => loc.id === emp.locationId)
             return <Employee key={emp.id} employee={emp} location= {location}/> })
        }
        </div>
    )
    }
