import React, { useContext, useState, useEffect, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);

    const login = (user, access_token) => {
        setAuthUser(user);
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('user', JSON.stringify(user));
    }

    const logout = () => {
        setAuthUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
    }

    return (
        <AuthContext.Provider value={{ authUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

    // export function useAuth() {
    //     return useContext(AuthContext);
    // }
    // export function AuthProvider(props) {
    //     const [authUser, setAuthUser] = useState(null);
    //     const [isLoggedIn, setIsLoggedIn] = useState(false);

    //     useEffect(() => {
    //         const subscribe = AuthService.subscribe((user) => {
    //             if (localStorage.getItem('user')) {
    //                 setAuthUser(JSON.parse(localStorage.getItem('user')));
    //                 setIsLoggedIn(true);
    //             }
    //             else {
    //                 setAuthUser(null);
    //                 setIsLoggedIn(false);
    //             }
    //         })
    //         return subscribe;
    //     }, [])

    //     const value = {
    //         authUser,
    //         setAuthUser,
    //         isLoggedIn,
    //         setIsLoggedIn
    //     };

    //     return (
    //         <AuthContext.Provider value={value}>
    //             {props.children}
    //         </AuthContext.Provider>
    //     )

