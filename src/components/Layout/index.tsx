import React from "react";
import style from "./Layout.module.css";
import Header from "../Header";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <section className={style.layout}>
            <Header />
            <br />
            {children}
        </section>
    );
};

export default Layout;
