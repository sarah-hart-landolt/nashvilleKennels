import React from "react"
import "./animal/Animals.css"
import "./location/Location.css"
import "./employee/Employee.css"
import "./customer/Customer.css"
import LocationList from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import CustomerList from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import EmployeeList from "./employee/EmployeeList"
import { EmployeeProvider} from "./employee/EmployeeProvider"
import AnimalList from "./animal/AnimalList"
import { AnimalProvider} from "./animal/AnimalProvider"

export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <AnimalList />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <EmployeeProvider>
                 <LocationProvider>
                     <EmployeeList />
                </LocationProvider>
            </EmployeeProvider>
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <CustomerProvider>
                <CustomerList />
            </CustomerProvider>
        </article>
    </>
)