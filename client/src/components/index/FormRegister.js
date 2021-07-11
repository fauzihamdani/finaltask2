import AuthContext from '../../contexts/auth/authContext';
import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';

function FormRegister({ handleClose, moveToLogin }) {
   const history = useHistory();
   const authContext = useContext(AuthContext);
   const { isLogin, register } = authContext;

   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= onchange Register input controller=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const [FormRegister, setFormRegister] = useState({
      email: '',
      password: '',
      fullname: '',
      phone: '',
      address: '',
      gender: '',
   });
   const { email, password, phone, address, fullname, gender } = FormRegister;

   const onChangeRegister = (e) => {
      const updateForm = { ...FormRegister };
      updateForm[e.target.name] = e.target.value;
      setFormRegister(updateForm);
   };
   // =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
   //
   const submitRegister = (e) => {
      e.preventDefault();
      const isAdmin = false;
      const body = JSON.stringify({
         email,
         password,
         phone,
         address,
         fullname,
         isAdmin,
         gender,
      });
      register(body);
      handleClose();
      history.push('/');
   };

   return (
      <div className="modal-background login">
         <h1 style={{ color: 'white', marginBottom: '4rem' }}>Register</h1>
         <form>
            <input
               type="text"
               name="email"
               id=""
               value={email}
               placeholder="Email"
               onChange={(e) => onChangeRegister(e)}
            />
            <input
               type="password"
               name="password"
               id=""
               value={password}
               placeholder="Password"
               onChange={(e) => onChangeRegister(e)}
            />
            <input
               type="text"
               name="fullname"
               id=""
               value={fullname}
               placeholder="Fullname"
               onChange={(e) => onChangeRegister(e)}
            />
            <select
               name="gender"
               id="gender"
               onChange={(e) => onChangeRegister(e)}
               value={gender}
            >
               <option value="male">Male</option>
               <option value="female">Female</option>
               <option value="i am not Sure">I'am Not Sure</option>
            </select>

            <input
               type="text"
               name="phone"
               id=""
               value={phone}
               placeholder="Phone"
               onChange={(e) => onChangeRegister(e)}
            />

            <input
               type="text"
               name="address"
               id=""
               value={address}
               placeholder="Address"
               onChange={(e) => onChangeRegister(e)}
            />

            <div
               className="submit-login button-a clicked"
               onClick={submitRegister}
            >
               <p>Register</p>{' '}
            </div>
         </form>
         <div style={{ display: 'flex', marginTop: '2rem' }}>
            <p style={{ color: 'white', margin: 'auto', fontSize: '1.5rem' }}>
               Already have an account ? Klik{' '}
               <span
                  onClick={moveToLogin}
                  style={{ fontWeight: 'bold', cursor: 'pointer' }}
               >
                  {' '}
                  Here
               </span>
            </p>
         </div>
      </div>
   );
}

export default FormRegister;
