import React, { useState, useEffect} from "react"
import restCountries from "../apis/restCountries";
import SearchBar from "./SearchBar"
import CountryList from "./CountryList"
import Pagination from './Pagination';
import Spinner from "./Spinner"

const App = ()=>{
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    useEffect(() =>{
        const fetchCountries = async ()=>{
            const response = await restCountries.get("/all")
            setCountries(response.data)
            setFilteredCountries(response.data)
            setLoading(false)
        }
        fetchCountries()

    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentCountries = filteredCountries.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const onSearch =(term)=>{
        const tempCountries = countries.filter((country)=>{
            let isPresent = false;
            for (let key in country){
                if (Array.isArray(country[key])){
                    for (let item of country[key]){
                        if(item){
                            item = item.toString()
                            if (item.includes(term)){
                                isPresent = true
                                break
                        }
                        }
                        
                    }
                }
                else{
                    if(country[key]){
                        let itemValue = country[key].toString()
            
                        if (itemValue.includes(term)){
                            isPresent = true
                            break
                        }
                    }
                   
                }
            }
            return isPresent
        })
        setFilteredCountries(tempCountries)
    }

    if (loading){
        return <div><Spinner/></div>
    }
    else{
        return (
            <div className="container-fluid">
                <SearchBar onSearch={onSearch}/>
                <CountryList countries={currentCountries} />
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={filteredCountries.length}
                    paginate={paginate}
                />
            </div>    
        )
    }
    
}

export default App