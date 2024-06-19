import { useState, useEffect } from "react";
import { useShoeData } from "../../hooks/useShoeData";
import { useEditShoe } from "../../hooks/useEditShoe";
import "./EditShoe.css";

export const EditShoe = ({ setIsEditing }) => {
  const { shoe } = useShoeData();
  const { editShoe, loading, error } = useEditShoe();

  const [shoeName, setShoeName] = useState("");
  const [shoeUrl, setShoeUrl] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [shoeImages, setShoeImages] = useState("");

  useEffect(() => {
    if (shoe) {
      setShoeName(shoe.name);
      setShoeUrl(shoe.url);
      setPrice(shoe.price);
      setDetails(shoe.description);
      setShoeImages(shoe.images.join("| "));
    }
  }, [shoe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imagesArray = shoeImages.split("|").map((img) => img.trim());

    const updatedShoeData = {
      name: shoeName,
      url: shoeUrl,
      price: price,
      description: details,
      images: imagesArray,
    };

    try {
      const updatedShoe = await editShoe(shoe.id, updatedShoeData);
      console.log("Shoe updated successfully:", updatedShoe);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating shoe:", error);
    }
  };

  return (
    <div className="editShoeContainer">
      <h2>Edit Shoe</h2>
      {shoe ? (
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
          {error && <p className="error">Error: {error.message}</p>}
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
