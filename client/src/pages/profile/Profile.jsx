import { Link, useParams } from "react-router-dom";
import "./profile.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import ModalForm from "../../component/modalForm/ModalForm";
import { useEffect, useState } from "react";
import { useAuth } from "./../../context/AuthProbider";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const { token } = useAuth();
  const profileId = useParams("id");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users/${profileId.id}`,
        {
          headers: {
            token: token,
          },
        }
      );
      setUserData(res.data);
    };
    fetch();
  }, [profileId.id, token]);
  return (
    <>
      {userData && (
        <div className="profile-page-content">
          <div className="profile-card">
            <div className="profile-user-profile">
              <div className="profile-card-img">
                <div className="profile-user-icon">
                  <CgProfile className="icon" />
                  {/* <img
                  src="https://svgsilh.com/svg/659651.svg"
                  alt="User-Profile-Image"
                /> */}
                </div>
                <div className="content">
                  <h6>Hembo Tingor</h6>
                  <p>Web Designer</p>
                </div>
              </div>
            </div>
            <div className="profile-card-block">
              <h5 className="custom-section-title">Information</h5>
              <hr />
              <div className="custom-user-info-row">
                <div className="custom-user-info">
                  <p className="custom-info-label">Name</p>
                  <h6>{userData.name}</h6>
                </div>
                <div className="custom-user-info">
                  <p className="custom-info-label">UserName</p>
                  <h6>{userData.username.slice(0, 15)}</h6>
                </div>
              </div>
              <div className="custom-user-info-row">
                <div className="custom-user-info">
                  <p className="custom-info-label">Email</p>
                  <h6>{userData.email}</h6>
                </div>
                <div className="custom-user-info">
                  <p className="custom-info-label">Phone</p>
                  <h6>{userData.phone}</h6>
                </div>
              </div>
              <div className="custom-user-info-row">
                <div className="custom-user-info">
                  <p className="custom-info-label">Country</p>
                  <h6>{userData.country}</h6>
                </div>
                <div className="custom-user-info">
                  <p className="custom-info-label">City</p>
                  <h6>{userData.city}</h6>
                </div>
              </div>
              <div className="edit-btn">
                <button onClick={openModal}>
                  <strong>Edit Profile</strong>
                </button>
              </div>
              <ul className="custom-social-links">
                <li>
                  <Link>
                    <FaFacebookF className="custom-social-link" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaTwitter className="custom-social-link" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaInstagram className="custom-social-link" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {isModalOpen && userData && (
            <div className="modal-wrap">
              <ModalForm
                showModal={isModalOpen}
                closeModal={closeModal}
                userData={userData}
                setUserData={setUserData}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
