import { AuthContextType } from "../../context/AuthContext";

export const defualtAuthContext: AuthContextType = {
    currentUser: null,
    userLoggedin: false,
    loading: false,
    initializeUser: (user: any) => {},
    logout: async () => {}
};
