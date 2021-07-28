import React,{useEffect} from 'react'
import { useStateValue } from "./State_provider";
import { auth } from "./FireBase";
import { Link } from "react-router-dom";
const Header_nav = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    useEffect(() => {
        // will only run once when the app component loads...
    
        auth.onAuthStateChanged((authUser) => {
          console.log("THE USER IS >>> ", authUser);
    
          if (authUser) {
            // the user just logged in / the user was logged in
    
            dispatch({
              type: "SET_USER",
              user: authUser,
            });
          } else {
            // the user is logged out
            dispatch({
              type: "SET_USER",
              user: null,
            });
          }
        });
      }, []);
    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }
    return (
        <>
        <div className='header__nav'>
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link></div>
     </>
    )
}

export default Header_nav
