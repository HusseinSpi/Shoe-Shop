import { CiHeart } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { addToCart } from "../../hooks/AddToCart";
import { addToFavorite } from "../../hooks/AddToFavorite";
import { useEffect, useState } from "react";

export const Buttons = ({ shoe, setIsEditing }) => {
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogIn");
    if (loggedIn === "true") {
      setEmail(localStorage.getItem("userEmail"));
      setIsAdmin(localStorage.getItem("isAdmin") === "true");
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
      {isAdmin && (
        <button className="edit" onClick={() => setIsEditing(true)}>
          Edit <FaPen />
        </button>
      )}
    </div>
  );
};
