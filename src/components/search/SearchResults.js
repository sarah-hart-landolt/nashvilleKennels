import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import { Animal } from "../animal/Animal"
import { EditAnimalForm } from "../animal/EditAnimalForm"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"


export const SearchResults = ({ searchTerms }) => {
    const { animals, releaseAnimal } = useContext(AnimalContext)
    const { customers } = useContext(CustomerContext)
    const { locations } = useContext(LocationContext)

    const [filteredAnimals, setFiltered] = useState([])
    const [selectedAnimal, setAnimal] = useState({animal: {id:0}, location: null, customer: null})

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, animals])

    return (
        <div className="searchResults">
            <h3>Results</h3>
            <div className="animals">
                {
                    filteredAnimals.map(animal => <div
                        className="fakeLink href"
                        onClick={() => {
                            const location = locations.find(l => l.id === animal.locationId)
                            const customer = customers.find(c => c.id === animal.customerId)

                            setAnimal({ animal, location, customer })
                            toggle()
                        }}
                    >{animal.name}</div>)
                }
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    { selectedAnimal.animal.name }
                </ModalHeader>
                <ModalBody>
                    <Animal key={selectedAnimal.animal.id} {...selectedAnimal} />
                </ModalBody>
            </Modal>
            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    {selectedAnimal.animal.name}
                </ModalHeader>
                <ModalBody>
                    <EditAnimalForm key={selectedAnimal.animal.id} toggleEdit={toggleEdit} {...selectedAnimal} />
                </ModalBody>
            </Modal>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                     { selectedAnimal.animal.name }
                </ModalHeader>
                <ModalBody>
                    <Animal key={selectedAnimal.animal.id} {...selectedAnimal} />
                </ModalBody>
                <ModalFooter>
                     <Button color="info" onClick={() => {
                            toggle()
                            toggleEdit()
                    }}>Edit Info</Button>
                    <Button color="danger" onClick={() => {
                        releaseAnimal(selectedAnimal.animal.id)
                        toggle()
                    }}>Delete</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}