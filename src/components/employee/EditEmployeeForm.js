import React, { useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Employee.css"

export const EditEmployeeForm = ({ employee, toggle, location }) => {
    const { updateEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)


    //  Separate state variable to track the employee as it is edited
    const [ updatedEmployee, setEmployee ] = useState(employee)

    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
   const handleControlledInputChange = (event) => {
    const newEmployee = Object.assign({}, updatedEmployee)
    newEmployee[event.target.name] = event.target.value
    setEmployee(newEmployee)
}

    const editEmployee = () => {
        const locationId = parseInt(updatedEmployee.locationId)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            updateEmployee({
                id: updatedEmployee.id,
                name: updatedEmployee.name,
                locationId: locationId,
                address: updatedEmployee.address
            })
            .then(toggle)
        }
    }

    return (
        <form className="employeeForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input
                        type="text"
                        id="employeeName"
                        name= "name"
                        defaultValue={employee.name}
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeAddress">Address: </label>
                    <input
                        type="text"
                        id="employeeAddress"
                        name = "address"
                        defaultValue={employee.address}
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Street address"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="locationId"
                        defaultValue={employee.locationId}
                        onChange={handleControlledInputChange}
                        id="employeeLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editEmployee()
                }}>
                Save Updates
            </button>
        </form>
    )
}