/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./signin.css";
import SocialLogin from "../../component/SocialLogin/SocialLogin";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "./../../context/AuthProbider";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const { logIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password } = data;
    logIn(email, password);
    navigate("/");
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
          <div>
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
          </div>
          {errors.email && (
            <p className="errorMassgae">{errors.email.message}</p>
          )}
          <div>
            <label id="icon" htmlFor="name">
              <FaKey />
            </label>
            <input
              {...register("password", { required: "This field is required" })}
              type="password"
              placeholder="Password"
            />
          </div>
          {errors.password && (
            <p className="errorMassgae">{errors.password.message}</p>
          )}
          <div className="btn-block">
            <button type="submit">Sign In</button>
          </div>
        </form>
        <SocialLogin />
      </div>
    </div>
  );
}
