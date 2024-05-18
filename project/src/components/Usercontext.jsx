import React, { createContext, useState } from 'react';

// Créez le contexte de l'utilisateur
export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userRole, setUserRole] = useState('');

    return (
        <UserContext.Provider value={{ userRole, setUserRole }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;