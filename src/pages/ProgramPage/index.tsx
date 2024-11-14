import React from "react";
import style from "./ProgramPage.module.css";
import StaticProgram from "../../components/StaticProgram";
import EditProgram from "../../components/EditProgram";

const ProgramPage: React.FC = () => {
    return (
        <div className={style.workoutContainer}>
            <h2 className={style.workoutTitle}>תוכנית אימון</h2>
            <StaticProgram/>
            <EditProgram/>
        </div>
    );
};

export default ProgramPage;
