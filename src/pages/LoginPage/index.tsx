import React, { FormEvent, useState } from "react";
import style from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import router from "../../router/path.json";
import useLogin from "../../hooks/api/useLogin";
import PageBlock from "../../components/PageBlock";
import FormInput from "../../components/FormInput";
import FormBtn from "../../components/FormBtn";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { handleLogin, isLoading } = useLogin();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (email && password) {
            const result = await handleLogin({
                email: email,
                password: password,
            });
            if (result) navigate(router.program);
        }
    };

    return (
        <PageBlock>
            <form onSubmit={handleSubmit} className={style.loginForm}>
                <h1 className={style.loginTitle}>התחברות</h1>
                <FormInput
                    id="Email"
                    label="אימייל"
                    type="text"
                    value={email}
                    onChange={setEmail}
                    isRequired
                />
                <FormInput
                    id="password"
                    label="סיסמה"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    isRequired
                />
                <FormBtn title="התחבר" isLoading={isLoading} />
            </form>
        </PageBlock>
    );
};

export default LoginPage;
