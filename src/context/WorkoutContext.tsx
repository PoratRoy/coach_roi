import { createContext, useContext, useState } from "react";
import { User } from "../models/types/auth";
import { defualtWorkoutContext } from "../models/init/context";

export type WorkoutContextType = {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    clearUsers: () => void;
};

export const WorkoutContext = createContext<WorkoutContextType>(defualtWorkoutContext);

export const useWorkoutContext = () => useContext(WorkoutContext);

export const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<User[]>([]);

    const clearUsers = () => {
        setUsers([]);
    };

    return (
        <WorkoutContext.Provider
            value={{
                users,
                setUsers,
                clearUsers,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};
