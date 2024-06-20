import { CiHeart } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { addToCart } from "../../hooks/AddToCart";
import { addToFavorite } from "../../hooks/AddToFavorite";
import { useDeleteShoe } from "../../hooks/useDeleteShoe";
import { useEffect, useState } from "react";

export const Buttons = ({ shoe, setIsEditing }) => {
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const { deleteShoe, loading, error } = useDeleteShoe();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogIn");
    if (loggedIn === "true") {
      setEmail(localStorage.getItem("userEmail"));
      setIsAdmin(localStorage.getItem("isAdmin") === "true");
    }
  }, []);

  const handleDelete = async () => {
    try {
      await deleteShoe(shoe.id);
      console.log("Shoe deleted successfully");
    } catch (error) {
      console.error("Error deleting shoe:", error);
    }
  };

  return (
    <div className="buttons">
      <button className="addToCart" onClick={() => addToCart(email, shoe)}>
        Add to Cart
      </button>
      <button className="favorite" onClick={() => addToFavorite(email, shoe)}>
        Favorite <CiHeart />
      </button>
      {isAdmin && (
        <>
          <button className="edit" onClick={() => setIsEditing(true)}>
            Edit <FaPen />
          </button>
          <button className="edit" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};
