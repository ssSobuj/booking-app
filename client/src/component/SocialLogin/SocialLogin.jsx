/* eslint-disable no-unused-vars */
import { FaGithub, FaGoogle } from "react-icons/fa";
import "./socialLogin.css";

export default function SocialLogin() {
  return (
    <>
      <div className="SocialsigninAndother">
        <div className="GoogleAndGithub">
          <button className="git">
            Sign up with <FaGoogle className="gogloe" />
          </button>
          <button className="google">
            Sign up with <FaGithub className="github" />{" "}
          </button>
        </div>
      </div>
    </>
  );
}
