/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProbider";
export default function PrivetRout({ children }) {
  const { authState } = useAuth();
  console.log(authState);
  return (
    <>
      {authState.currentUser ? (
        children
      ) : (
        <Navigate to={`/porfile/${authState?.currentUser._id}`} />
      )}
    </>
  );
}
