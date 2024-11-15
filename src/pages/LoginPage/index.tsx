import React, { FormEvent, useRef } from "react";
import style from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import router from "../../router/path.json";
import useLogin from "../../hooks/api/useLogin";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { handleLogin } = useLogin();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (emailRef.current && passwordRef.current) {
            const result = await handleLogin({
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
                    <label htmlFor="Email">Email:</label>
                    <input id="Email" type="text" ref={emailRef} required />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" ref={passwordRef} required />
                </div>

                <button type="submit">Login</button>
            </form>
        </section>
    );
};

export default LoginPage;
