import { useNavigate } from "react-router-dom";

export const Card = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shoes/${data.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={data.url} alt={data.name} />
      <h2>{data.name}</h2>
      <div className="colors">{data.colors} Colors</div>
      <div className="price">₪ {data.price}</div>
    </div>
  );
};
