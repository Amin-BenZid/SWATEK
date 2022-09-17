import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "./editpage.css";

export default function EditPartner({ open, onClose, data }) {
  const [updatedPartner, setUdatedPartner] = useState({
    name: data.partenairesName,
    description: data.partenairesDes,
  });
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  if (!open) return null;
  const handleChange = (e) => {
    setUdatedPartner({ ...updatedPartner, [e.target.name]: e.target.value });
  };

  const handleDescription = (e) => {
    setUdatedPartner({ ...updatedPartner, description: e });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", updatedPartner.name);
    formData.append("description", updatedPartner.description);

    axios
      .patch(`partenaires/edit/${data._id}`, updatedPartner)
      .then((res) => {
        setSuccess("Done");
        window.location.reload();
      })
      .catch((err) => {
        setError("Error");
        console.log(err.response.data.error);
      });
  };
  return (
    <div>
      <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <div className="modalRight">
            <p className="closeBtn" onClick={onClose}>
              X
            </p>
            <div className="content">
              <h2 style={{ color: "green" }}>{success}</h2>
              <h2 style={{ color: "red" }}>{error}</h2>
              <h4>{`Update ${data.memberName}`}</h4>
              <form onSubmit={handleSubmit}>
                <span>Name</span>
                <br />
                <input
                  style={{ backgroundColor: " white" }}
                  onChange={handleChange}
                  value={updatedPartner.name}
                  type="Titre"
                  name="name"
                />
                <br />
                <span>Role</span>
                <br />

                <span>Descreption</span>
                <ReactQuill
                  style={{ height: "24vh", color: "black", backgroundColor: "white" }}
                  onChange={handleDescription}
                  theme="snow"
                  value={updatedPartner.description}
                  type="Description"
                  name="description"
                />
                <div className="btnContainer">
                  <button>Edit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
