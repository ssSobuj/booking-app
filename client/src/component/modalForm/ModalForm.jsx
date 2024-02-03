/* eslint-disable react/prop-types */
import { useState } from "react";
import "./modalForm.css";
import { useAuth } from "../../context/AuthProbider";
import axios from "axios";

export default function ModalForm({
  showModal,
  closeModal,
  userData,
  setUserData,
}) {
  const { token } = useAuth();

  const [formData, setFormData] = useState({
    ...userData,
  });

  const { name, email, phone, country, city, username } = formData;

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

  console.log(formData._id);
  const updateUser = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8800/api/users/${formData._id}`,
        formData,
        {
          headers: {
            token: token,
          },
        }
      );
      setUserData(response.data);
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
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="username">User Name:</label>
            <input
              disabled
              type="text"
              id="username"
              name="username"
              value={username}
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
              value={email}
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
              value={phone}
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
              value={country}
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
              value={city}
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
