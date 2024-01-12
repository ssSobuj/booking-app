/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./signin.css";
import SocialLogin from "../../component/SocialLogin/SocialLogin";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "./../../context/AuthProbider";

export default function SignIn() {
  const {logOut, logIn} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    logIn(email, password);
  };

  return (
    <div className="signin-container">
      <div className="signin-section">
        <h1>Sign In</h1>
        <p>
          You do not have an account{" "}
          <Link to={"/register"}>
            <b>Create an account</b>
          </Link>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label id="icon" htmlFor="email">
            <FaEnvelope />
          </label>
          <input
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <p className="errorMassgae">{errors.email.message}</p>
          )}
          <label id="icon" htmlFor="name">
            <FaKey />
          </label>
          <input
            {...register("password", { required: "This field is required" })}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="errorMassgae">{errors.password.message}</p>
          )}
          <div className="btn-block">
            <button type="submit">
              <Link>Sign In</Link>
            </button>
          </div>
        </form>
        <button onClick={logOut}>logout</button>       
        <SocialLogin />
      </div>
    </div>
  );
}
