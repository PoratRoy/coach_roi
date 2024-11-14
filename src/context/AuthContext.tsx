import { createContext, useContext, useState } from "react";
import { auth } from "../config/firebase";
import { GoogleUser } from "../models/types";
import { defualtAuthContext } from "../models/init/context";

export type AuthContextType = {
    currentUser: any;
    userLoggedin: boolean;
    loading: boolean;
    initializeUser: (user: any) => void
    logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(defualtAuthContext);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<GoogleUser | null>(null);
    const [userLoggedin, setUserLoggedin] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, initializeUser);
    //     return unsubscribe;
    // });

    const initializeUser = (user: any) => {
        if (user && (user as GoogleUser)?.uid) {
            setCurrentUser({ ...user });
            setUserLoggedin(true);
        } else {
            setCurrentUser(null);
            setUserLoggedin(false);
        }
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
                loading,
                initializeUser,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
