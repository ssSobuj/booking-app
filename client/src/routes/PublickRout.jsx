/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProbider";

export default function PublickRout({ children }) {
  const { authState } = useAuth();
  return (
    <>
      {!authState.currentUser ? (
        children
      ) : (
        <Navigate to={`/profile/${authState?.currentUser?._id}`} />
      )}
    </>
  );
}
