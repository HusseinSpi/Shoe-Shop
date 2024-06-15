import { CiHeart } from "react-icons/ci";
import { addToCart } from "../../hooks/AddToCart";
import { addToFavorite } from "../../hooks/AddToFavorite";
import { useEffect, useState } from "react";

export const Buttons = ({ shoe }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogIn");
    if (loggedIn === "true") {
      setEmail(localStorage.getItem("userEmail"));
    }
  }, []);
  return (
    <div className="buttons">
      <button className="addToCart" onClick={() => addToCart(email, shoe)}>
        Add to Cart
      </button>
      <button className="favorite" onClick={() => addToFavorite(email, shoe)}>
        Favorite <CiHeart />
      </button>
    </div>
  );
};
