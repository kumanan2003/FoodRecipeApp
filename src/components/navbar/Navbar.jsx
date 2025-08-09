import { useContext } from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';

function Navbar(){

    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)

    console.log(searchParam);
    

    return (
        <>
            <nav className="header-container">
                <h2 className="title">FoodRecipie</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                    name="search"
                    value={searchParam}
                    onChange={(event)=>setSearchParam(event.target.value)}
                    placeholder="Enter Itemes..."
                    className="search-input"
                    />
                </form>
                <ul className='nav'>
                    <li>
                        <NavLink to={'/'} className={'navbar'}>Home</NavLink>
                    </li>
                     <li>
                        <NavLink to={'/Favourites'} className={'navbar'}>favourites</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar