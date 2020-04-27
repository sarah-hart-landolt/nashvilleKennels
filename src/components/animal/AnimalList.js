import React, { useContext, useState, useEffect } from "react"
import { Button, Modal, ModalBody, ModalHeader} from "reactstrap"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animals.css"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import AnimalForm from "./AnimalForm"

export default () => {
    const { animals, searchTerm, setAnimals } = useContext(AnimalContext)
    const [ filteredAnimals, setFiltered ] = useState([])
    const { locations } = useContext (LocationContext)
    const { customers } = useContext(CustomerContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    useEffect(() => {
        const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerm))
        setFiltered(subset)
    }, [searchTerm])

    useEffect(() => {
        setFiltered(animals)
    }, [animals])


    return (
        <>
        <h2>Animals</h2>
        <Button onClick={() => {
                // check if the user is authenticated
                const userId = localStorage.getItem("kennel_customer")
                if(userId){
                    // If the user is authenticated, show the animal form
                    toggle()
                }
            }}>Make an Appointment</Button>
        <div className="animals">
        {
            filteredAnimals.map(ani => {
                 const clinic = locations.find(loc => loc.id === ani.locationId)
                 const owner = customers.find(c => c.id === ani.customerId)
            return  <Animal key={ani.id} 
                            animal={ani} 
                            location= {clinic}
                            customer = {owner} /> })
        }
        </div>



        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                New Animal
            </ModalHeader>
            <ModalBody>
                <AnimalForm toggler={toggle} />
            </ModalBody>
        </Modal>
        </>
    )
    
}