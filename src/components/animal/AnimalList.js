import React, { useContext, useEffect } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { Animal } from "./Animal"
import { AnimalContext } from "./AnimalProvider"

export const AnimalList = (props) => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  useEffect(
    () => {
      console.log("AnimalList: Initial render before data")
      getLocations()
        getCustomers()
        getAnimals()
    },
    []
  )

  if( animals.length && locations.length && customers.length ) {
  return (
    <div className="animals">
    {/* {console.log(animals, locations, customers)} */}

    <button onClick={() => props.history.push("/animals/create")}>
        Add Dog
        </button>
      {
        animals.map(animal => {
          const owner = customers.find(c => c.id === animal.customerId)
          const clinic = locations.find(l => l.id === animal.locationId)
          // debugger
          return <Animal key={animal.id} animal={animal} location={clinic} customer={owner} />
        })
      }
    </div>
  )
    } else { return <div></div> }}