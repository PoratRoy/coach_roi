import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../models/types/auth";
import { defualtWorkoutContext } from "../models/init/context";
import { MsgType } from "../models/types";

export type WorkoutContextType = {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    setAlert: (msg: string, type: MsgType, hes: boolean, ) => void;
    getAlert: () => { alertMsg: string; alertType: MsgType };
    hasAlert: boolean;
    clearUsers: () => void;
};

export const WorkoutContext = createContext<WorkoutContextType>(defualtWorkoutContext);

export const useWorkoutContext = () => useContext(WorkoutContext);

export const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [hasAlert, setHasAlert] = useState<boolean>(false);
    const [alertMsg, setAlertMsg] = useState<string>("");
    const [alertType, setAlertType] = useState<MsgType>("success");

    useEffect(() => {
        if (hasAlert) {
            setTimeout(() => {
                setAlertMsg("");
                setHasAlert(false);
            }, 3000);
        }
    }, [hasAlert]);

    const clearUsers = () => {
        setUsers([]);
        setAlertMsg("");
    };

    const setAlert = (msg: string, type: MsgType, has: boolean = true) => {
        setAlertMsg(msg);
        setAlertType(type);
        setHasAlert(has);
    };

    const getAlert = () => {
        return { alertMsg, alertType };
    };

    return (
        <WorkoutContext.Provider
            value={{
                users,
                setUsers,
                setAlert,
                getAlert,
                hasAlert,
                clearUsers,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};
