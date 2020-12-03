import React, { useContext, useRef, useEffect } from "react";
import { CustomerContext } from "../customer/CustomerProvider";
import { LocationContext } from "../location/LocationProvider";
import { AnimalContext } from "../animal/AnimalProvider";
import "./Animal.css";

export const AnimalForm = (props) => {
  const { addAnimals } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);

  /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.
        No more `document.querySelector()` in React.
    */
  const name = useRef(null);
  // useRef(null) returns an object that has a current property set to the value of the argument i.e., {current: null}
  const location = useRef(null);
  const customer = useRef(null);
  const breed = useRef(null);

  /*
        Get animal state and location state on initialization.
    */
  useEffect(() => {
    getCustomers().then(getLocations);
  }, []);

  const constructNewAnimal = () => {
    /*
        The `location` and `animal` variables below are
        the references attached to the input fields. You
        can't just ask for the `.value` property directly,
        but rather `.current.value` now in React.
    */
    const locationId = parseInt(location.current.value);
    const customerId = parseInt(customer.current.value);
    const animalName = name.current.value;
    const animalBreed = breed.current.value;

    if (locationId === 0 || customerId === 0 || animalName === "") {
      window.alert(
        "Please select a location and an customer and provide a name"
      );
    } else {
      addAnimals({
        name: animalName,
        breed: animalBreed,
        locationId,
        customerId,
      }).then(() => props.history.push("/animals"));
    }
    console.log("ADD ANIMALS", addAnimals());
  };

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New Dog</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalName">Dog name: </label>
          <input
            type="text"
            id="animalName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Dog name"
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="animalBreed">Dog Breed: </label>
          <input
            type="text"
            id="animalBreed"
            ref={breed}
            required
            autoFocus
            className="form-control"
            placeholder="Dog breed"
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="animalLocation"
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Caretaker for: </label>
          <select
            defaultValue=""
            name="Customer"
            ref={customer}
            id="customerAnimal"
            className="form-control"
          >
            <option value="0">Select an Customer</option>
            {customers.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          constructNewAnimal();
        }}
        className="btn btn-primary"
      >
        Save Animal
      </button>
    </form>
  );
};
