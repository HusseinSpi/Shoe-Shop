import { useNavigate } from "react-router-dom";
import "./CartCard.css";
import { ButtonsCart } from "./ButtonsCart";

export const CartCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shoes/${data.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="imageCart">
        <img src={data.url} alt={data.name} />
      </div>
      <div className="details">
        <h2>{data.name}</h2>
        <div className="description">{data.description}</div>
        <div className="price">₪ {data.price.toFixed(2)}</div>
        <ButtonsCart data={data} />
      </div>
    </div>
  );
};
