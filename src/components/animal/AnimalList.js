import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animals.css"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext (LocationContext)
    const { customers } = useContext(CustomerContext)

    return (
        <div className="animals">
        {
            animals.map(ani => {
                 const clinic = locations.find(loc => loc.id === ani.locationId)
                 const owner = customers.find(c => c.id === ani.customerId)
            return  <Animal key={ani.id} 
                            animal={ani} 
                            location= {clinic}
                            customer = {owner} /> })
        }
        </div>
    )
}