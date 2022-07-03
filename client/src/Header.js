import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import "./styles/Header.css"

function Header() {
  return (
    <header>
        <nav>
            <h3>Instagram</h3>
            <div>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type = "search" placeholder='Search' id = 'search'></input>
            </div>

            <ul>
                <li><HomeIcon fontSize="large" /></li>
                <li><AddIcon fontSize="large"/></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header

