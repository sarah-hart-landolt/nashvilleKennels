import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { EditEmployeeForm } from "./EditEmployeeForm"


export default ({employee, location }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

return (
    <>
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{employee.address}</div>
        <div className="employee__location">{location.name}</div>
        <Button onClick={() => {
                // check if the user is authenticated
                    // If the user is authenticated, show the animal form
                    toggle()
            }}>Edit</Button>
    </section>
    <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                Edit Employee
                </ModalHeader>
                <ModalBody>
                    <EditEmployeeForm toggler={toggle} employee= {employee} location = {location} />
                </ModalBody>
            </Modal>
    </>
    )
}


