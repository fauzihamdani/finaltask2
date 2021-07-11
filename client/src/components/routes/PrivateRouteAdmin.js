import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../contexts/auth/authContext';
const PrivateRoute = ({ component: Component, ...rest }) => {
   // const { state: userState } = useContext(UserContext);

   const authContext = useContext(AuthContext);
   const { isLogin, isAdmin, userData } = authContext;

   return (
      <Route
         {...rest}
         render={(props) =>
            isLogin && userData.isAdmin == true ? (
               <Component {...props} />
            ) : (
               <Redirect to="/" />
            )
         }
      />
   );
};

export default PrivateRoute;
