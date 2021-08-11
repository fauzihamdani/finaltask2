import { useEffect, useContext } from 'react';
import '../../styles/navbar/navbar.css';
import pp from '../../assets/photo-pp.jpg';
import dumbSound from '../../assets/dumbsound.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import AuthContext from '../../contexts/auth/authContext';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import logoutIcon from '../../assets/logoutIcon.svg';
import addArtis from '../../assets/addartis.svg';
import addMusic from '../../assets/addmusic.svg';

function Navbar() {
   const history = useHistory();
   const authContext = useContext(AuthContext);
   const { isLogin, logout, userData, loadUser, isAdmin } = authContext;
   // logout functionality====================================
   const submitLogout = () => {
      logout();
      if (!isLogin) {
         history.push('/');
      }
   };
   // *
   // *

   // useEffect(() => {
   //    loadUser();
   //    if (isLogin === false) {
   //       history.push('/');
   //    } else {
   //       if (userData && userData?.isAdmin === false) {
   //          history.push('/home');
   //       } else if (userData && userData?.isAdmin === true) {
   //          history.push('/transactions');
   //       }
   //    }
   // }, [isLogin, isAdmin]);
   return (
      <div className="navbar">
         <div className="navbar-container">
            <Link to="/">
               <div className="container-dumbsound clicked">
                  <img className="dumbsound-img-size" src={dumbSound} />
               </div>
            </Link>
            <Dropdown bsPrefix="dropdown-style">
               <Dropdown.Toggle bsPrefix="dropdown-style" id="dropdown-basic">
                  <div className="container-pp bg-image-colorfull">
                     <img
                        className="image-size-100-rounded"
                        src={`http://localhost:5000/uploads/${userData.photoprofile}`}
                     />
                  </div>
               </Dropdown.Toggle>
               <Dropdown.Menu bsPrefix="background-dropdown-item">
                  <div>
                     <Link to="/add-music">
                        <Dropdown.Item
                           href="#/action-1"
                           style={{
                              color: 'white',
                              fontSize: '1.2rem',
                              marginBottom: '1.5rem',
                              width: '20rem',
                              display: 'flex',
                              justifyContent: 'center',
                              gap: '1rem',
                              backgroundColor: '#3a3a3a',
                           }}
                        >
                           <div>
                              <img
                                 style={{ width: '2rem' }}
                                 src={addMusic}
                                 alt=""
                                 srcset=""
                              />
                           </div>
                           <div> Add Music</div>
                        </Dropdown.Item>
                     </Link>
                  </div>
                  <div>
                     <Link to="/add-artist">
                        <Dropdown.Item
                           href="#/action-2"
                           style={{
                              color: 'white',
                              fontSize: '1.2rem',
                              marginBottom: '1.5rem',
                              display: 'flex',
                              justifyContent: 'center',
                              gap: '1rem',
                              backgroundColor: '#3a3a3a',
                           }}
                        >
                           <div>
                              <img
                                 style={{ width: '2rem' }}
                                 src={addArtis}
                                 alt=""
                                 srcset=""
                              />
                           </div>
                           <div> Add Artist</div>
                        </Dropdown.Item>
                     </Link>
                  </div>
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
                           alignItems: 'center',
                           gap: '1rem',
                           backgroundColor: '#3a3a3a',
                        }}
                     >
                        <div>
                           <img
                              style={{ width: '2rem' }}
                              src={logoutIcon}
                              alt=""
                              srcset=""
                           />
                        </div>
                        <div> Logout</div>
                     </Dropdown.Item>
                  </div>
               </Dropdown.Menu>
            </Dropdown>
         </div>
      </div>
   );
}

export default Navbar;
