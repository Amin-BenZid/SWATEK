import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "./editpage.css";

export default function EditActualite({ open, onClose, data }) {
  const [updatedActualite, setUpdatedActualite] = useState({
    name: data.title,
    description: data.paragraph,
  });
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  if (!open) return null;
  const handleChange = (e) => {
    setUpdatedActualite({ ...updatedActualite, [e.target.name]: e.target.value });
  };

  const handleDescription = (e) => {
    setUpdatedActualite({ ...updatedActualite, description: e });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", updatedActualite.name);
    formData.append("description", updatedActualite.description);

    axios
      .patch(`actualites/edit/${data._id}`, updatedActualite)
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
              <h4>{`Update ${data.title}`}</h4>
              <form onSubmit={handleSubmit}>
                <span>Name</span>
                <br />
                <input
                  style={{ backgroundColor: " white" }}
                  onChange={handleChange}
                  value={updatedActualite.name}
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
                  value={updatedActualite.description}
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
