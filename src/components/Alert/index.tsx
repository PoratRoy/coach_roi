import React, { useRef } from "react";
import style from "./Alert.module.css";
import { MsgType } from "../../models/types";
import useClickOutside from "../../hooks/useClickOutside";

interface AlertProps {
    message: string;
    type?: MsgType;
    closeAlert: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type = "success", closeAlert }) => {
    const modalRef = useRef<any>(null);
    useClickOutside(modalRef, () => closeAlert());
    
    return (
        <div
            ref={modalRef}
            className={style.alert}
            style={{
                backgroundColor: type === "success" ? "#d7f8e4" : "#f8d7da",
                color: type === "success" ? "#0f5132" : "#842029",
            }}
        >
            <div className={style.alertContent}>
                <button onClick={closeAlert}>X</button>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Alert;
