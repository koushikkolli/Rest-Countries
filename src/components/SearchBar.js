import React, { useState } from "react"

const SearchBar = (props)=>{
    const [term, setTerm] = useState("");
    const onSearch = (e)=>{
        e.preventDefault()
        setTerm(e.target.value)
        props.onSearch(e.target.value)
    }

    const onFormSubmit = (e)=>{
        e.preventDefault()
    }


    return(
        <div className="row">
            <div className="col-sm-12 col-md-4"></div>
            <div className="col-sm-12 col-md-4">
                <form onSubmit={onFormSubmit} className="form-group">
                    <div style={{marginTop:"20px"}}>
                        <input className="form-control" type="text" placeholder="Search" value={term} onChange={(e)=> onSearch(e)} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBar