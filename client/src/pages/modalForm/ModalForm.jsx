/* eslint-disable react/prop-types */
import { useState } from "react";
import "./modalForm.css";
import { useAuth } from "../../context/AuthProbider";
import axios from "axios";

export default function ModalForm({ showModal, closeModal }) {
  const { authState } = useAuth();
  const { currentUser } = authState;

  const filterName = currentUser.username
    .split("")
    .filter((item) => isNaN(item))
    .join("");

  const name = filterName.charAt(0).toUpperCase() + filterName.slice(1);

  const [formData, setFormData] = useState({
    ...currentUser,
    name,
  });
  // console.log(authState);

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
    closeModal();
  };

  console.log(formData);
  const updateUser = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8800/api/users/${currentUser._id}`,
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <div className="title">
          {" "}
          <h2>Edit Your Profile</h2>
        </div>

        <span className="close" onClick={closeModal}>
          &times;
        </span>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="city"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Updet Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}
