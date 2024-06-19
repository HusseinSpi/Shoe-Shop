import { useNavigate } from "react-router-dom";
import "./MyAccount.css";

export const MyAccount = ({ userName }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("isLogIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isAdmin");
    window.location.reload();
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Welcome {userName}</h1>
      <div className="buttonsAccount">
        <button className="submit" onClick={() => navigate("/add-shoe")}>
          Add Shoe
        </button>
        <button className="submit" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </>
  );
};
