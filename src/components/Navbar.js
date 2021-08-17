import React, {useState} from 'react';
import '../sass/component/_navbar.scss'
import Logo from '../image/logo-tm.svg'

const Navbar = () => {

    const [search, setSearch] = useState('')

    const onChange = e => {
        setSearch (    
            [e.target.name] = e.target.value
        )      
        
    }

    const onSubmit = e => {
        e.preventDefault()

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
                <input
                    type='submit'
                    value='Buscar'
                    className='search-btn'
                   
                />
            </form>
        </nav>
    )
}

export default Navbar
