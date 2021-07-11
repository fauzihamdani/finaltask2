import { useState, useEffect, useContext } from 'react';
import '../../styles/navbar/navbar.css';
import pp from '../../assets/photo-pp.jpg';
import dumbSound from '../../assets/dumbsound.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import AuthContext from '../../contexts/auth/authContext';
import { useHistory } from 'react-router';

function Navbar() {
   const history = useHistory();
   const authContext = useContext(AuthContext);
   const { isLogin, logout } = authContext;
   // logout functionality====================================
   const submitLogout = () => {
      logout();
      if (!isLogin) {
         history.push('/');
      }
   };
   // *
   // *
   return (
      <div className="navbar">
         <div className="navbar-container">
            <div className="container-dumbsound">
               <img className="dumbsound-img-size" src={dumbSound} />
            </div>

            <Dropdown bsPrefix="dropdown-style">
               <Dropdown.Toggle bsPrefix="dropdown-style" id="dropdown-basic">
                  <div className="container-pp bg-image-colorfull">
                     <img className="image-size-100-rounded" src={pp} />
                  </div>
               </Dropdown.Toggle>
               <Dropdown.Menu bsPrefix="background-dropdown-item">
                  <Dropdown.Item
                     href="#/action-1"
                     style={{
                        color: 'white',
                        fontSize: '1.2rem',
                        marginBottom: '1.5rem',
                        width: '20rem',
                        display: 'flex',
                        justifyContent: 'center',
                     }}
                  >
                     Add Music
                  </Dropdown.Item>
                  <Dropdown.Item
                     href="#/action-2"
                     style={{
                        color: 'white',
                        fontSize: '1.2rem',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                     }}
                  >
                     Add Artist
                  </Dropdown.Item>
                  <hr style={{ color: 'white' }} />
                  <div onClick={submitLogout}>
                     <Dropdown.Item
                        href="#/action-2"
                        style={{
                           color: 'white',
                           fontSize: '1.2rem',
                           marginBottom: '1.5rem',
                           display: 'flex',
                           justifyContent: 'center',
                        }}
                     >
                        Logout
                     </Dropdown.Item>
                  </div>
               </Dropdown.Menu>
            </Dropdown>
         </div>
      </div>
   );
}

export default Navbar;
