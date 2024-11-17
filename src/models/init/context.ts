import { AuthContextType } from "../../context/AuthContext";
import { WorkoutContextType } from "../../context/WorkoutContext";

export const defualtAuthContext: AuthContextType = {
    currentUser: null,
    userLoggedin: false,
    isAdmin: false,
    loading: false,
    initializeUser: (user: any) => {},
    logout: async () => {}
};

export const defualtWorkoutContext: WorkoutContextType = {
    users: [],
    setUsers: () => {},
    setAlert: () => {},
    getAlert: () => { return { alertMsg: "", alertType: "success" } },
    hasAlert: false,
    clearUsers: () => {}
};