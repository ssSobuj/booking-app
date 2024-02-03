/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { authReducer } from "../reducer/authReducer";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) ?? null,
  loading: false,
  error: "",
};

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

const getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export default function AuthProbider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  const [token, setToken] = useState(getCookie("access_token"));

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(authState.currentUser));
    setCookie("access_token", token, 12);
  }, [authState.currentUser, token]);

  const regester = async (data, username) => {
    authDispatch({ type: "SET_USER_LOADING", payload: true });
    try {
      const {
        data: { message, details },
      } = await axios.post("http://localhost:8800/api/auth/register", {
        ...data,
        username,
      });

      authDispatch({ type: "SET_USER", payload: details });
      console.log(message);
    } catch (error) {
      authDispatch({
        type: "SET_USER_ERROR",
        action: error?.res?.data?.message,
      });
      console.log(error?.res?.data?.message);
    }
  };

  const logIn = async (email, password) => {
    authDispatch({ type: "SET_USER_LOADING", payload: true });
    try {
      const { data } = await axios.post(
        "http://localhost:8800/api/auth/login",
        {
          email,
          password,
        }
      );
      authDispatch({ type: "SET_USER", payload: data.details });
      console.log(data.token);
      setToken(data.token);
    } catch (error) {
      authDispatch({
        type: "SET_USER_ERROR",
        action: error?.res?.data?.message,
      });
      console.log(error?.res?.data?.message);
    }
  };

  const logOut = () => {
    authDispatch({ type: "RESET_USER_STATE" });
    console.log("log out");
  };

  return (
    <>
      <AuthContext.Provider
        value={{ authState, regester, logIn, logOut, token }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
