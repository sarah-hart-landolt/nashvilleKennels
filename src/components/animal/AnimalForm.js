import React, { useContext, useRef } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Animals.css"

export default props => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const animalName = useRef("")
    const animalLocation = useRef(0)
    const animalBreed = useRef()

    const constructNewAnimal = () => {
        const locationId = parseInt(animalLocation.current.value)
        const userId = parseInt(localStorage.getItem("kennel_customer"))
    

        if (locationId === 0 || animalName.current.value === "" || animalBreed.current.value === "") {
            window.alert("Please fill out all fields")

        } else {
            addAnimal({
                name: animalName.current.value,
                locationId: locationId,
                breed: animalBreed.current.value,
                customerId: userId
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">Make Appointment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal's name: </label>
                    <input
                        type="text"
                        id="animalName"
                        ref={animalName}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Animal name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed"> Breed: </label>
                    <input
                        type="text"
                        id="animalBreed"
                        ref={animalBreed}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Animal Breed"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={animalLocation}
                        id="animalLocation"
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
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewAnimal()
                    }
                }
                className="btn btn-primary">
                Save Appointment
            </button>
        </form>
    )
}