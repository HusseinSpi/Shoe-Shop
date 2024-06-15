import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { addToCart } from "../../hooks/AddToCart";
import axios from "axios";
import "./ShoePage.css";

export const ShoePage = () => {
  const [shoes, setShoes] = useState([]);
  const { shoeId } = useParams();
  const [color, setColor] = useState(0);
  const [shoeImg, setShoeImg] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogIn");
    if (loggedIn === "true") {
      setEmail(localStorage.getItem("userEmail"));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://666c683149dbc5d7145deb82.mockapi.io/Shose";

      try {
        const response = await axios.get(url);
        setShoes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const shoe = shoes.find((shoe) => shoe.id === Number(shoeId));
    if (shoe && Array.isArray(shoe.images)) {
      if (Array.isArray(shoe.images[color])) {
        setShoeImg(shoe.images[color][0] || "");
      } else {
        setShoeImg(shoe.images[0] || "");
      }
    }
  }, [shoeId, shoes, color]);

  const handleColor = (colorIndex) => {
    setColor(colorIndex);
    const shoe = shoes.find((shoe) => shoe.id === Number(shoeId));
    if (shoe && Array.isArray(shoe.images)) {
      if (Array.isArray(shoe.images[colorIndex])) {
        setShoeImg(shoe.images[colorIndex][0] || "");
      } else {
        setShoeImg(shoe.images[0] || "");
      }
    }
  };

  const handleClick = (e) => {
    setShoeImg(e.target.src);
  };

  const shoe = shoes.find((shoe) => shoe.id === Number(shoeId));

  return (
    <div>
      {shoe ? (
        <div className="shoeContainer">
          <div className="img">
            <div className="SmallPictures">
              {Array.isArray(shoe.images[color]) ? (
                shoe.images[color].map((image, index) => (
                  <img
                    key={`${image}-${index}`}
                    src={image}
                    alt={shoe.name}
                    onClick={handleClick}
                  />
                ))
              ) : Array.isArray(shoe.images) ? (
                shoe.images.map((image, index) => (
                  <img
                    key={`${image}-${index}`}
                    src={image}
                    alt={shoe.name}
                    onClick={handleClick}
                  />
                ))
              ) : (
                <p>No images available for this color.</p>
              )}
            </div>
            <div className="BigPicture">
              <img src={shoeImg} alt={shoe.name} />
            </div>
          </div>
          <div className="details">
            <h1>{shoe.name}</h1>
            <p>{shoe.description}</p>
            <p>Price: ${shoe.price}</p>
            <p>Colors available: {shoe.colors}</p>
            {Array.isArray(shoe.images) && shoe.images.length > 1 && (
              <div className="shoeColors">
                {shoe.images.map((imageArray, index) => (
                  <div key={index}>
                    {Array.isArray(imageArray) && imageArray.length > 0 ? (
                      <img
                        src={imageArray[0]}
                        alt={shoe.name}
                        onClick={() => handleColor(index)}
                        className={color === index ? "selectedColor" : ""}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            )}
            <div className="buttons">
              <button
                className="addToCart"
                onClick={() => addToCart(email, shoe)}
              >
                Add to Cart
              </button>
              <button className="favourite">
                Favourite <CiHeart />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
