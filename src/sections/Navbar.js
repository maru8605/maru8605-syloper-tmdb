import React, {useState, useContext} from 'react';
import { SearchContext } from '../context/SearchContext';
import {Link } from 'react-router-dom';
import '../sass/section/_navbar.scss';
import Logo from '../image/logo-tm.svg'; 


 

const Navbar = () => {

    const {search, setSearch} = useContext(SearchContext)
    const [text, setText] = useState('');

    const onChange = e => {
        setText (    
            [e.target.name] = e.target.value
        )      
        console.log(setText)
    }

    const onClick = () => {
        setSearch(text)
    }
    return (
        <nav className='container-fluid py-4 nav d-flex justify-content-between'>
            <div className='logo  mx-5'>
                <img src={Logo} alt='The movie Database'/>
            </div>
            <form 
            className='search mx-5' >
                <input
                    type='text'
                    placeholder='Buscar'
                    className='search-input'
                    onChange={onChange}
                    name={text}
                    
                />
                <Link to={'/search/?name='+search}>
                    <input
                        type='submit'
                        value='Buscar'
                        className='search-btn'
                        onClick={onClick} 
                    />
                </Link>
            </form>
        </nav>
    )
}

export default Navbar

  
    
  
    
  