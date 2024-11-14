import React, { FormEvent, useRef } from "react";
import style from "./RegisterPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import router from "../../router/path.json";
import useRegister from "../../hooks/api/useRegister";

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const { handleRegister } = useRegister();
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (usernameRef.current && emailRef.current && passwordRef.current) {
            const result = await handleRegister({
                username: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });
            if (result) navigate(router.program);
        }
    };

    return (
        <section className={style.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" ref={usernameRef} required minLength={3} />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" ref={emailRef} required />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" ref={passwordRef} required minLength={6} />
                </div>

                <button type="submit">Register</button>
            </form>
            <div>
                <Link to={router.login}>login</Link>
            </div>
        </section>
    );
};

export default RegisterPage;
