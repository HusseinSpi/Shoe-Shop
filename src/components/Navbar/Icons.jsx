import { FaShoppingCart, FaHeart, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Icons() {
  const navigate = useNavigate();
  return (
    <div className="icons">
      <div className="icon" onClick={() => navigate("/cart")}>
        <FaShoppingCart />
        <span className="badge"></span>
      </div>
      <div className="icon" onClick={() => navigate("/favorite")}>
        <FaHeart />
        <span className="badge"></span>
      </div>
      <div className="icon" onClick={() => navigate("/login")}>
        <FaSignOutAlt />
      </div>
    </div>
  );
}

export default Icons;
