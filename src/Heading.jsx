import React from 'react'
import Header_logo from './Header_logo';
import Header_option from './Header_option';
import Basket from './Basket';
import Header_search from './Header_search';
import  Header_nav from './Header_nav'
import { Link } from "react-router-dom";
import './Heading.css'
const Heading = () => {
    return (
      <>
        <div className='header'>
           <Header_logo/>
           <Header_search/>
           < Header_nav/>
           <Header_option/>
          <Basket/>
          
            </div>
       
          
       </>
    )
}

export default Heading
