import React from "react";
import style from "./FormBtn.module.css";
import Loading from "../Loading";

type FormBtnProps = {
    title: string;
    isLoading: boolean;
    onClick?: () => void;
};

const FormBtn: React.FC<FormBtnProps> = ({ title, isLoading, onClick }) => {
    return (
        <section className={style.btnContinar}>
            {isLoading ? (
                <Loading />
            ) : (
                <button type="submit" onClick={onClick ? onClick : () => {}} className={style.btn}>
                    {title}
                </button>
            )}
        </section>
    );
};

export default FormBtn;
