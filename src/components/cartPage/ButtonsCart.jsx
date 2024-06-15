import { CiHeart } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDeleteFromCart } from "../../hooks/DeleteFromCart";

export const ButtonsCart = ({ data }) => {
  const { deleteShoe } = useDeleteFromCart();
  const handleDelete = async (e) => {
    e.stopPropagation();

    await deleteShoe(data.id);
    window.location.reload();
  };
  return (
    <div className="buttonsCart">
      <button className="love">
        <CiHeart />
      </button>
      <button className="delete" onClick={handleDelete}>
        <FaRegTrashCan />
      </button>
    </div>
  );
};
