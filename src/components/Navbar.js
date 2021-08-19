import React, {useState, useEffect} from 'react';
import { useHistory , useParams} from 'react-router-dom';
import {Link } from 'react-router-dom'
import '../sass/component/_navbar.scss'
import Logo from '../image/logo-tm.svg'; 
import { fetchSearch } from '../service';
import axios from 'axios'
 

const Navbar = () => {

    const [search, setSearch] = useState([])
    
    
    
    useEffect(() => {
        const fetchApi = async()=>{
            const query = search
            const apiKey = 'a2c5b0aa63f4810637029fdd61a1549b'
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      
            const respuesta = await axios.get(url)
            console.log(respuesta.data.results)
            setSearch(respuesta.data.results)
       }
       fetchApi()
    }, [])


    const onChange = e => {
        setSearch (    
            [e.target.name] = e.target.value
        )      
        console.log(setSearch)
    }

    const onSubmit = e => {
        e.preventDefault()

        setSearch(fetchSearch)
        console.log(setSearch)
        console.log('haciendo submit')
    }

    return (
        <nav className='container-fluid py-4 nav d-flex justify-content-between'>
            <div className='logo  mx-5'>
                <img src={Logo} />
            </div>
            <form 
            className='search mx-5' 
            onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Buscar'
                    className='search-input'
                    onChange={onChange}
                    name={search}
                    
                />
                <Link to={'/search/:movie'}>
                    <input
                        type='submit'
                        value='Buscar'
                        className='search-btn'
                    
                    />
                </Link>
            </form>
        </nav>
    )
}

export default Navbar

  
    
  
    
  