export const MyAccount = ({ userName }) => {
  const handleLogOut = () => {
    localStorage.removeItem("isLogIn");
    localStorage.removeItem("userName");
    window.location.reload();
  };

  return (
    <>
      <h1>Welcome {userName}</h1>
      <div className="submit" onClick={handleLogOut}>
        Log Out
      </div>
    </>
  );
};
