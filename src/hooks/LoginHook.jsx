import { userData } from "../api/getUsers";

export const LoginHook = async (email, password) => {
  try {
    const users = await userData();
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.email === email && user.password === password) {
        localStorage.setItem("userEmail", user.email);
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
