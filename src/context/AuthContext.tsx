import { createContext, useContext, useState } from "react";
import { auth } from "../config/firebase";
import { User } from "../models/types/auth";
import { defualtAuthContext } from "../models/init/context";

export type AuthContextType = {
    currentUser: any;
    userLoggedin: boolean;
    isAdmin: boolean;
    loading: boolean;
    initializeUser: (user: any) => void;
    logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(defualtAuthContext);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userLoggedin, setUserLoggedin] = useState<boolean>(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, initializeUser);
    //     return unsubscribe;
    // });

    const initializeUser = (user: User) => {
        setCurrentUser({ ...user });
        setIsAdmin(user.role === "admin"? true: false);
        setUserLoggedin(true);
        setLoading(false);
    };

    const logout = async () => {
        await auth.signOut();
    };

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                userLoggedin,
                isAdmin,
                loading,
                initializeUser,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
