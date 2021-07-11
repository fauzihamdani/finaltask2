import AuthContext from '../../contexts/auth/authContext';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

function FormLogin({ handleClose, moveToRegister }) {
   const history = useHistory();
   const authContext = useContext(AuthContext);
   const { isLogin, login } = authContext;

   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= onchange login input controller=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const [formLogin, setFormLogin] = useState({
      email: '',
      password: '',
   });
   const { email, password } = formLogin;

   const onChangeLogin = (e) => {
      const updateForm = { ...formLogin };
      updateForm[e.target.name] = e.target.value;
      setFormLogin(updateForm);
   };
   // =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

   const submitLogin = (e) => {
      e.preventDefault();

      const body = JSON.stringify({ email, password });
      login(body);
      handleClose();
      history.push('/');
   };

   return (
      <div className="modal-background login">
         <h1 style={{ color: 'white', marginBottom: '4rem' }}>Login</h1>
         <form>
            <input
               type="text"
               name="email"
               id=""
               value={email}
               placeholder="Email"
               onChange={(e) => onChangeLogin(e)}
            />
            <input
               type="password"
               name="password"
               id=""
               value={password}
               placeholder="Password"
               onChange={(e) => onChangeLogin(e)}
            />
            <div
               className="submit-login button-a clicked"
               onClick={submitLogin}
            >
               <p>Login</p>{' '}
            </div>
         </form>

         <div className="" style={{ display: 'flex', marginTop: '2rem' }}>
            <p style={{ color: 'white', margin: 'auto', fontSize: '1.5rem' }}>
               Don't have an account ? Klik{' '}
               <span
                  onClick={moveToRegister}
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

export default FormLogin;
