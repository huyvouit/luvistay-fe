import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/auth_reducer";
import { TOKEN_NAME, REFTOKEN } from "../../constants";

import { toast } from "react-toastify";
import authApi from "../../api/auth_api";
import { useDispatch } from "react-redux";
import { getLikeBlogByUserApi } from "../../redux/Api/user";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const dispatchRedux = useDispatch();
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
        getLikeBlogByUserApi(dispatchRedux, { userId: response.data._id });
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
        localStorage.setItem(TOKEN_NAME, response.data.accessToken);
        localStorage.setItem(REFTOKEN, response.data.refreshToken);
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
      const response = await authApi.postSignUp(userForm);

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
    }
  };

  // Logout;
  const logoutUser = (action) => {
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem(REFTOKEN);
    dispatch({
      type: "SET_AUTH",
      payload: { authLoading: false, isAuthenticated: false, user: null },
    });
    action();
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
