import React, {useState} from 'react';
import {Link } from 'react-router-dom'
import '../sass/component/_navbar.scss'
import Logo from '../image/logo-tm.svg'; 


 

const Navbar = () => {

    const [search, setSearch] = useState('')
    

    const onChange = e => {
        setSearch (    
            [e.target.name] = e.target.value
        )      
        
    }

    return (
        <nav className='container-fluid py-4 nav d-flex justify-content-between'>
            <div className='logo  mx-5'>
                <img src={Logo} alt='The Movie Database' />
            </div>
            <form 
            className='search mx-5' >
                <input
                    type='text'
                    placeholder='Buscar'
                    className='search-input'
                    onChange={onChange}
                    name={search}
                    
                />
                <Link to={'/search/?name='+search}>
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

  
    
  
    
  