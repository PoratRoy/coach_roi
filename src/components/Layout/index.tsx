import React from "react";
import style from "./Layout.module.css";
import Header from "../Header";
import Alert from "../Alert";
import { useWorkoutContext } from "../../context/WorkoutContext";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { getAlert, hasAlert, setAlert } = useWorkoutContext();

    return (
        <section className={style.layout}>
            <Header />
            <br />
            {children}
            {hasAlert ? (
                <Alert
                    closeAlert={() => setAlert("", "success", false)}
                    message={getAlert().alertMsg}
                    type={getAlert().alertType}
                />
            ) : null}
        </section>
    );
};

export default Layout;
