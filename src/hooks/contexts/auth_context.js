import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/auth_reducer";
import { TOKEN_NAME, REFTOKEN } from "../../constants";

import { toast } from "react-toastify";
import authApi from "../../api/auth_api";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  //Authenticate user
  const loadUser = async () => {
    try {
      const response = await authApi.getUser();
      const checkUser = localStorage.getItem(TOKEN_NAME);
      if (response.success) {
        // console.log("Verify token");
        dispatch({
          type: "SET_AUTH",
          payload: {
            authLoading: false,
            isAuthenticated: true,
            user: response.data,
          },
        });
      }
    } catch (error) {
      localStorage.removeItem(TOKEN_NAME);
      localStorage.removeItem(REFTOKEN);
      // console.log("faild verify");
      dispatch({
        type: "SET_AUTH",
        payload: { authLoading: false, isAuthenticated: false, user: null },
      });
    }
  };

  useEffect(() => loadUser(), []);

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await authApi.postSignIn(userForm);

      if (response.success) {
        console.log(response.data.accessToken);
        localStorage.setItem(TOKEN_NAME, response.data.accessToken);
        localStorage.setItem(REFTOKEN, response.data.refreshToken);
        // localStorage.setItem(REFTOKEN, response.data.refreshToken);
      }

      await loadUser();

      return response;
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      }
    }
  };

  // Register
  const registerUser = async (userForm) => {
    try {
      console.log(userForm);
      const response = await authApi.postSignUp(userForm);

      console.log(`data: ${response}`);

      return response.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      if (error.response.data) return error.response.data;
    }
  };

  // Logout;
  const logoutUser = () => {
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem(REFTOKEN);
    dispatch({
      type: "SET_AUTH",
      payload: { authLoading: false, isAuthenticated: false, user: null },
    });
  };

  // Context data
  const authContextData = {
    registerUser,
    loginUser,
    logoutUser,
    authState,
    loadUser,
  };

  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
