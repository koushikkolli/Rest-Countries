import React from "react"

const Spinner = ()=>{
    return(
        <div className="text-center" style={{marginTop:'300px'}}>
        <div className="spinner-grow text-dark" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div>Loading</div>
        </div>
    )
}

export default Spinner