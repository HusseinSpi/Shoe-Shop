import { useState, useEffect } from "react";
import { GetObjectUser } from "../../hooks/GetObjectUser";
import { CartCard } from "../../components/cartPage/CartCard";
import "./CartPage.css";
import { Bill } from "../../components/cartPage/Bill";

export const CartPage = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogIn");
    if (loggedIn === "true") {
      setEmail(localStorage.getItem("userEmail"));
    }
  }, []);

  useEffect(() => {
    if (email) {
      const fetchUser = async () => {
        const userData = await GetObjectUser(email);
        setUser(userData);
      };

      fetchUser();
    }
  }, [email]);

  if (user) {
    return (
      <div className="cardsForCart">
        <div className="shoes">
          {user.cart.map((shoe) => (
            <CartCard key={shoe.id} data={shoe} />
          ))}
        </div>
        <div className="bill">
          <Bill shoes={user.cart} />
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
};
