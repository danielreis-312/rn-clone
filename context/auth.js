import { createContext, useContext } from "react";

export const AuthContext = createContext([]);

function AuthProvider({ children }) {
  const user = {
    id: "123456",
    name: "daniel",
    email: "danielplayer005@gmail.com",
  };
  return <AuthContext.Provider value={user}>{children} </AuthContext.Provider>;
}
