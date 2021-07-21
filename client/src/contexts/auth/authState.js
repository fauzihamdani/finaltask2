import { useReducer } from 'react';

import AuthContext from './authContext';
import AuthReducer from './authReducer';

import { API, setAuthToken } from '../../config/api';

const AuthState = (children) => {
   const initialState = {
      token: localStorage.getItem('token'),
      isLogin: false,
      loading: true,
      error: null,
      userData: null,
      userInfo: null,
      isFollowed: false,
      isAdmin: false,
   };
   const [state, dispatch] = useReducer(AuthReducer, initialState);

   const loadUser = async () => {
      const token = setAuthToken(localStorage.token);
      const config = {
         headers: {
            'Content-Type': 'application/json',
         },
      };
      try {
         const response = await API.get('/check-auth', config);
         if (response.status === 401) {
            return dispatch({ type: 'AUTH_ERROR' });
         }
         dispatch({
            type: 'USER_LOADED',
            payload: response?.data?.data?.user,
         });
      } catch (err) {
         dispatch({ type: 'AUTH_ERROR' });
         console.log(err);
      }
   };

   const getUserInfo = async (id) => {
      const config = {
         headers: {
            'Content-Type': 'application/json',
         },
      };
      try {
         const response = await API.get(`/user-by-id/${id}`, config);
         if (response.status === 401) {
            return dispatch({ type: 'AUTH_ERROR' });
         }
         dispatch({
            type: 'GET_USER_INFO',
            payload: response?.data?.data?.user,
         });
      } catch (err) {
         dispatch({ type: 'AUTH_ERROR' });
         console.log(err);
      }
   };

   const login = async (formData) => {
      try {
         const config = {
            headers: {
               'Content-Type': 'application/json',
            },
         };
         const res = await API.post('/login', formData, config);

         const input = dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res?.data?.data?.user,
         });
         if (input) loadUser();
      } catch (err) {
         console.log(err);
         dispatch({
            type: 'LOGIN_FAIL',
            payload: 'err.response.data.msg', //<< response error from server
         });
      }
   };

   const logout = () => {
      try {
         dispatch({
            type: 'LOGOUT',
         });
      } catch (error) {
         dispatch({ type: 'REGISTER_FAIL', payload: 'error' });
      }
   };

   const register = async (formData) => {
      try {
         const config = {
            headers: {
               'Content-Type': 'application/json',
            },
         };
         const res = await API.post('/register', formData, config);
         dispatch({
            type: 'REGISTER_SUCCESS',
            payload: res.data.data.user,
         });
         loadUser();
      } catch (error) {
         dispatch({ type: 'REGISTER_FAIL', payload: error.res });
      }
   };

   // Update User
   const updateUser = async (data) => {
      try {
         const config = { headers: { 'Content-Type': 'application/json' } };
         const response = await API.patch('/user', data, config);
         dispatch({
            type: 'UPDATE_USER',
            payload: response.data.data.user,
         });
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <AuthContext.Provider
         value={{
            isLogin: state.isLogin,
            token: state.token,
            loading: state.loading,
            userData: state.userData,
            userInfo: state.userInfo,
            isAdmin: state.isAdmin,
            loadUser,
            login,
            logout,
            register,
            updateUser,
            getUserInfo,
         }}
      >
         {children.children}
      </AuthContext.Provider>
   );
};

export default AuthState;
