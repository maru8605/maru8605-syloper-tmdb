import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";   
import axios from 'axios'
import Card from '../components/Card'

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const SearchResult = () => {
    let query = useQuery();
    const [search, setSearch] = useState(query.get("name"))
    const [result, setResult] = useState([])
    
    useEffect(() => {
        const fetchApi = async()=>{
            const query = search
            const apiKey = 'a2c5b0aa63f4810637029fdd61a1549b'
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      
            const respuesta = await axios.get(url)
           
            setResult(respuesta.data.results)
       }
       fetchApi()
    }, [])

    return (
        <div className='row mt-3 '>
    
    {result.map((item, index) => (
        <Card
            key={index}
            item={item}
        />
        ) )      
    }
      
    </div>
     
    )
}

export default SearchResult
