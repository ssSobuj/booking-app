export const authReducer = (authState, authAction) => {
  switch (authAction.type) {
    case "SET_USER":
      return { ...authState, currentUser: authAction.payload, loading: false };
    case "SET_USER_ERROR":
      return { ...authState, error: authAction.payload, loading: false };
    case "SET_USER_LOADING":
      return { ...authState, loading: authAction.payload };
    case "RESET_USER_STATE":
      return {
        currentUser: null,
        loading: false,
        error: "",
      };
    default:
      return authState;
  }
};
