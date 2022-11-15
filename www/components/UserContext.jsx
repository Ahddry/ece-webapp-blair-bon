import { createContext, useState, useEffect } from "react";

// Contexte de l'utilisateur

const Context = createContext();
export default Context;
export const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <Context.Provider
            value={{
                user: user,
                login: (user) => {
                    setUser(user);
                },
                logout: () => {
                    setUser(null);
                },
            }}
        >
            {children}
        </Context.Provider>
    );
};
