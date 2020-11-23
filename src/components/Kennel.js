import React from "react"
import "./Kennel.css"
import { Animal } from "./animal/Animal"
import { Employees } from "./employees/Employees"
import { Locations } from "./locations/Locations"
import { Customer } from "./customers/Customer"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <Employees />
            <Employees />
            <Employees />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <Locations />
            <Locations />
            <Locations />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)