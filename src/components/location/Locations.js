import React from "react"
import "./Locations.css"



export const Locations = ({location}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
    <div className="location__address">{location.address}</div>
    </section>
)