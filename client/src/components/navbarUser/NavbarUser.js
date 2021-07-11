import { useState, useEffect, useContext } from 'react';
import '../../styles/navbarUser/navbarUser.css';
import pp from '../../assets/photo-pp.jpg';
import dumbSound from '../../assets/dumbsound.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import FormLogin from '../../components/index/FormLogin';
import FormRegister from '../../components/index/FormRegister';
import { Modal } from 'react-bootstrap';
import { useHistory } from 'react-router';
import AuthContext from '../../contexts/auth/authContext';
import { Link } from 'react-router-dom';

function Navbar() {
   const history = useHistory();
   const authContext = useContext(AuthContext);
   const { isLogin, loadUser, logout, userData } = authContext;

   // ============== Modal Login Controller====================
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   // ==========================================================

   // ============== Modal Register Controller==================
   const [show2, setShow2] = useState(false);

   const handleClose2 = () => setShow2(false);
   const handleShow2 = () => setShow2(true);
   // ==========================================================

   const moveToRegister = () => {
      handleClose();
      handleShow2();
   };

   const moveToLogin = () => {
      handleClose2();
      handleShow();
   };

   // logout functionality====================================
   const submitLogout = () => {
      logout();
      if (!isLogin) {
         history.push('/');
      }
   };
   // *
   // *
   return isLogin ? (
      <div className="navbar_">
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
                  <div className="clicked button-a">
                     <Link to={`/payment`}>
                        <Dropdown.Item
                           href="#/action-1"
                           style={{
                              color: 'white',
                              fontSize: '1.2rem',
                              marginBottom: '1.5rem',
                              marginTop: '1rem',
                              width: '10rem',
                              display: 'flex',
                              // justifyContent: 'center',
                              fontWeight: 'bold',
                           }}
                        >
                           Pay
                        </Dropdown.Item>
                     </Link>
                  </div>

                  <hr style={{ color: 'white' }} />
                  <div onClick={submitLogout}>
                     <Dropdown.Item
                        style={{
                           color: 'white',
                           fontSize: '1.2rem',
                           marginBottom: '1.5rem',
                           display: 'flex',
                           // justifyContent: 'center',
                           fontWeight: 'bold',
                        }}
                     >
                        Logout
                     </Dropdown.Item>
                  </div>
               </Dropdown.Menu>
            </Dropdown>
         </div>
      </div>
   ) : (
      <div className="navbar_">
         <div className="navbar-container">
            <div className="container-dumbsound">
               <img className="dumbsound-img-size" src={dumbSound} />
            </div>

            <div className="login-register-wrapper">
               <div
                  className="button-login clicked button-a"
                  onClick={handleShow}
               >
                  <p className="login-text">Login</p>
               </div>
               <div
                  className="button-register clicked button-a"
                  onClick={handleShow2}
               >
                  {' '}
                  <p className="login-text">Register </p>
               </div>
            </div>
         </div>
         <Modal
            // dialogClassName="modal-90w"
            show={show}
            onHide={handleClose}
            style={{ borderRadius: '5px' }}
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <>
               <FormLogin
                  handleClose={handleClose}
                  moveToRegister={moveToRegister}
               />
            </>
         </Modal>

         <Modal
            // size="sm"
            // dialogClassName="modal-90w"
            show={show2}
            onHide={handleClose2}
            style={{ borderRadius: '5px' }}
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <>
               <FormRegister
                  handleClose={handleClose2}
                  moveToLogin={moveToLogin}
               />
            </>
         </Modal>
      </div>
   );
}

export default Navbar;
