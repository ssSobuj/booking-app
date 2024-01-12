/* eslint-disable no-undef */
import { FaEnvelope, FaFlag, FaKey, FaUser } from "react-icons/fa";
import "./register.css";
import { Link } from "react-router-dom";
import Button from "../../component/button/Button";
import { ImKey2 } from "react-icons/im";
import { FaCity } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Register() {
  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();
  const onSubmit = async (data) => {
    const username = data.name.split(" ").join("_").toLowerCase() + Date.now();
    const findUserByEmail = await axios.get(
      `http://localhost:8800/api/users?email=${data.email}`
    );

    if (findUserByEmail.data.length > 0) {
      setError("email", {
        type: "manual",
        message: "Email already exists",
      });
    } else {
      try {
        await axios.post("http://localhost:8800/api/auth/register", {
          ...data,
          username,
        });
        console.log("User registered successfully");
      } catch (error) {
        console.log(error.message);
      }
    }
    // reset();
  };
  return (
    <div className="register-container">
      <div className="register-section">
        <h1>Registration</h1>
        <p>
          You alredy have an account{" "}
          <Link to={"/singin"}>
            <b>Sign in now</b>
          </Link>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label id="icon" htmlFor="name">
            <FaUser />
          </label>
          <input
            {...register("name", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z]+(?:[ \t]+[a-zA-Z]+)*$/,
                message: "Invalid Name",
              },
            })}
            type="text"
            placeholder="Name"
          />
          {errors.name && <p className="errorMassgae">{errors.name.message}</p>}

          <label id="icon" htmlFor="email">
            <FaEnvelope />
          </label>
          <input
            {...register("email", {
              required: "This field is required",
              pattern: {
                value:
                  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <p className="errorMassgae">{errors.email.message}</p>
          )}

          <div className="d-flex">
            <div>
              <label id="icon" htmlFor="password">
                <FaKey />
              </label>
              <input
                {...register("password", {
                  required: "This field is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!#~.*%*?&]{8,}$/,
                    message:
                      "Password must contain uppercase, lowercase, number, special character, and be at least 8 characters long.",
                  },
                })}
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <p className="errorMassgae">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label id="icon" htmlFor="confirmPassword">
                <ImKey2 />
              </label>
              <input
                {...register("confirmPassword", {
                  required: "This field is required",
                  validate: {
                    equalTo: (value) =>
                      value === getValues("password") || "Passwords must match",
                  },
                })}
                type="password"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="errorMassgae">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <div className="d-flex">
            <div>
              <label id="icon" htmlFor="country">
                <FaFlag />
              </label>
              <input
                {...register("country", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z]+(?:[ \t]+[a-zA-Z]+)*$/,
                    message: "Invalid Name",
                  },
                })}
                type="text"
                placeholder="Country"
              />
              {errors.country && (
                <p className="errorMassgae">{errors.country.message}</p>
              )}
            </div>
            <div>
              <label id="icon" htmlFor="city">
                <FaCity />
              </label>
              <input
                {...register("city", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z]+(?:[ \t]+[a-zA-Z]+)*$/,
                    message: "Invalid Name",
                  },
                })}
                type="text"
                placeholder="City"
              />
              {errors.city && (
                <p className="errorMassgae">{errors.city.message}</p>
              )}
            </div>
          </div>
          <label id="icon" htmlFor="number">
            <BiSolidContact />
          </label>
          <input
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value: /^(01[1-9][0-9]{8})$/,
                message: "Enter a valid 11-digit phone starting with '01'.",
              },
            })}
            type="number"
            placeholder="Phone Number"
          />
          {errors.phone && (
            <p className="errorMassgae">{errors.phone.message}</p>
          )}

          <div className="btn-block">
            <p>
              By signing in or creating an account, you agree with our{" "}
              <Link href="https://www.w3docs.com/privacy-policy">
                Terms & Conditions
              </Link>{" "}
              and <Link>Privacy Statement</Link>.
            </p>
            <Button
              type="submit"
              hoverColore="#00A2C5"
              style={{
                color: "var(--primary-color)",
                backgroundColor: "var(--secondary-color)",
                padding: "10px 50px",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.5s ease-in-out",
              }}
            >
              <Link to={"/singin"}>Submit</Link>
            </Button>
          </div>
        </form>

        {/* <form onSubmit={handleSubmit}>
          <label id="icon" htmlFor="email">
            <FaEnvelope />
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
          />
          {error?.email && <p className="errorMassgae">{error.email}</p>}

          <label id="icon" htmlFor="name">
            <FaUser />
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
          />
          {error?.name && <p className="errorMassgae">{error.name}</p>}
          <label id="icon" htmlFor="password">
            <FaKey />
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
          />
          {error?.password && <p className="errorMassgae">{error.password}</p>}
          <label id="icon" htmlFor="password">
            <IoKeyOutline />
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={data.confirmPassword}
          />
          {error?.confirmPassword && (
            <p className="errorMassgae">{error.confirmPassword}</p>
          )}

          <label id="icon" htmlFor="country">
            <FaFlag />
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="country"
            placeholder="Country"
            value={data.country}
          />
          {error?.country && <p className="errorMassgae">{error.country}</p>}

          <div className="btn-block">
            <p>
              By signing in or creating an account, you agree with our{" "}
              <Link href="https://www.w3docs.com/privacy-policy">
                Terms & Conditions
              </Link>{" "}
              and <Link>Privacy Statement</Link>.
            </p>
            <Button
              type={"submit"}
              hoverColore={"#00A2C5"}
              style={{
                color: "var(--primary-color)",
                backgroundColor: "var(--secondary-color)",
                padding: " 10px 50px",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.5s ease-in-out",
              }}
            >
              Submit
            </Button>
          </div>
        </form> */}
      </div>
    </div>
  );
}
