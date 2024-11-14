import { AuthContextType } from "../../context/AuthContext";

export const defualtAuthContext: AuthContextType = {
    currentUser: null,
    userLoggedin: false,
    isAdmin: false,
    loading: false,
    initializeUser: (user: any) => {},
    logout: async () => {}
};
