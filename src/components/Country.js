import React from "react"
import "./Country.css"

const Country = ({ country })=>{
    return (
        <div className="card text-center mt-5 card-margin" style={{width:"18rem"}}>
            <div className="card-header header">
                {country.name}
            </div>
            <div className="body card-body">
                <img className="card-image" src={country.flag} alt={country.name} width="250px" height="180px"/>
                <p className="text card-text">Capital: {country.capital}</p>
                <p className="text card-text">Region: {country.region}</p>
                <p className="text card-text">Country Code: {country.alpha3Code}</p>
            </div>
        </div>
    )
}

export default Country