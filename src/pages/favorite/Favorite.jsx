import { Card } from "../../components/home/cards/Card";
import { GetObjectUser } from "../../hooks/GetObjectUser";
import { useState, useEffect } from "react";

export const Favorite = () => {
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

  return (
    <div className="cardsContainer">
      {user ? (
        user.favorite.map((item) => <Card key={item.id} data={item} />)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
