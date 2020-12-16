import React from "react"
import Country from "./Country"

const CountryList = ({ countries })=>{
    const renderedList = countries.map((country)=>{
        return (
            <div key={country.name}>
                <Country country={country} />
            </div>
        )
    })

    return (
        <div className="row justify-content-center">
            {renderedList}
        </div>
    )
}

export default CountryList

