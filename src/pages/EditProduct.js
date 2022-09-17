import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "./editpage.css";

export default function EditProduct({ open, onClose, data }) {
  const [updatedProduct, setUpdatedProduct] = useState({
    name: data.ProduitName,
    description: data.ProduitDes,
  });
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  if (!open) return null;
  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };
  const handleDescription = (e) => {
    setUpdatedProduct({ ...updatedProduct, description: e });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", updatedProduct.name);
    formData.append("description", updatedProduct.description);

    axios
      .patch(`produits/edit/${data._id}`, updatedProduct)
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
            <h4>{`Update ${data.ProduitName}`}</h4>
            <form onSubmit={handleSubmit}>
              <span>Name</span>
              <br />
              <input
                style={{ backgroundColor: " white" }}
                onChange={handleChange}
                value={updatedProduct.name}
                type="Titre"
                name="name"
              />

              <br />
              <span>Descreption</span>

              <ReactQuill
                style={{ height: "24vh", color: "black", backgroundColor: "white" }}
                onChange={handleDescription}
                theme="snow"
                value={updatedProduct.description}
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
