/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: "",
};

export default function AuthProbider({ children }) {
  const [authState, setAuthState] = useState(initialState);
  console.log(authState.user);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(authState.user));
  }, [authState.user]);
  const logIn = async (email, password) => {
    setAuthState({ ...authState, loading: false });
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", {
        email,
        password,
      });
      console.log("login");
      setAuthState({ ...authState, loading: false, user: res.data.details });
    } catch (error) {
      console.log(error?.res?.data?.message);
    }
  };

  const logOut = () => {
    localStorage.removeItem("user");
    setAuthState(initialState);
    localStorage.removeItem && console.log("log out");
  };
  const value = { authState, logIn, logOut };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
