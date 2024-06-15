import { CiHeart } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDeleteFromCart } from "../../hooks/DeleteFromCart";
import { addToFavorite } from "../../hooks/AddToFavorite";

import { useEffect, useState } from "react";

export const ButtonsCart = ({ data }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogIn");
    if (loggedIn === "true") {
      setEmail(localStorage.getItem("userEmail"));
    }
  }, []);

  const { deleteShoe } = useDeleteFromCart();
  const handleDelete = async (e) => {
    e.stopPropagation();

    await deleteShoe(data.id);
    window.location.reload();
  };
  return (
    <div className="buttonsCart">
      <button className="love" onClick={() => addToFavorite(email, data)}>
        <CiHeart />
      </button>
      <button className="delete" onClick={handleDelete}>
        <FaRegTrashCan />
      </button>
    </div>
  );
};
