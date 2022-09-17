import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "./editpage.css";

export default function EditEquip({ open, onClose, data }) {
  const [updatedMember, setUpdatedMember] = useState({
    name: data.memberName,
    description: data.memberDes,
  });
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  if (!open) return null;
  const handleChange = (e) => {
    setUpdatedMember({ ...updatedMember, [e.target.name]: e.target.value });
  };

  const handleDescription = (e) => {
    setUpdatedMember({ ...updatedMember, description: e });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", updatedMember.name);
    formData.append("description", updatedMember.description);

    axios
      .patch(`equipe/edit/${data._id}`, updatedMember)
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
                value={updatedMember.name}
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
                value={updatedMember.description}
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
  );
}
