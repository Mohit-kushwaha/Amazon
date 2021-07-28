import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
const Header_search = () => {
    return (
        
              <div className='header__search'>
                  <input className='header__searchInput' type="text" />
                  <SearchIcon className='header__searchIcon'/>
              </div>
       
    )
}

export default Header_search
