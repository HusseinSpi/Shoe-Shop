import { useState } from "react";
import { AddShoe } from "../../hooks/AddShoe";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FormAddShoe.css";

export const FormAddShoe = () => {
  const [shoeName, setShoeName] = useState("");
  const [shoeUrl, setShoeUrl] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [shoeImages, setShoeImages] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const imagesArray = shoeImages.split("|").map((image) => image.trim());
    await AddShoe(shoeName, shoeUrl, price, 1, details, imagesArray);
    setLoading(false);
  };

  return (
    <div className="editShoeContainer">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="shoeName">Shoe Name</label>
          <input
            type="text"
            id="shoeName"
            value={shoeName}
            onChange={(e) => setShoeName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shoeUrl">Shoe URL</label>
          <input
            type="text"
            id="shoeUrl"
            value={shoeUrl}
            onChange={(e) => setShoeUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="details">Details</label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shoeImages">Shoe Images</label>
          <textarea
            id="shoeImages"
            value={shoeImages}
            onChange={(e) => setShoeImages(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
