import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("currentUserEmail")
      ? { email: localStorage.getItem("currentUserEmail") }
      : null
  );

  const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u) => u.email === email)) {
      return { success: false, error: "email already exist" };
    }
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);

    setUser({ email });

    return { success: true };
  };

  const logout = ()=>{
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  }

  const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((u) => u.email === email && u.password=== password);

        if(!user){
            return{success: false, error: "Invalid email and password"}
        }

        localStorage.setItem("currentUserEmail", email);
        setUser({email});
        return {success: true}



  }

  return (
    <AuthContext.Provider value={{ signup, user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
