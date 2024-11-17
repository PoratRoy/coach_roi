import React from "react";
import style from "./PageBlock.module.css";

type PageBlockProps = {
    children: React.ReactNode;
};

const PageBlock: React.FC<PageBlockProps> = ({ children }) => {
    return <section className={style.pageBlock}>{children}</section>;
};

export default PageBlock;
