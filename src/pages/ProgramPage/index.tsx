import React from "react";
import style from "./ProgramPage.module.css";
import StaticProgram from "../../components/StaticProgram";
import EditProgram from "../../components/EditProgram";
import Layout from "../../components/Layout";
import { useAuthContext } from "../../context/AuthContext";

const ProgramPage: React.FC = () => {
    const { isAdmin } = useAuthContext();

    return (
        <Layout>
            <h2 className={style.workoutTitle}>תוכנית אימון</h2>
            {isAdmin ? <EditProgram /> : <StaticProgram />}
        </Layout>
    );
};

export default ProgramPage;
