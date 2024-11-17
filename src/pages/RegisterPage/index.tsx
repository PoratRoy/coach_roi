import React, { FormEvent, useState } from "react";
import style from "./RegisterPage.module.css";
import { useNavigate } from "react-router-dom";
import router from "../../router/path.json";
import useRegister from "../../hooks/api/useRegister";
import Layout from "../../components/Layout";
import PageBlock from "../../components/PageBlock";
import FormInput from "../../components/FormInput";
import FormBtn from "../../components/FormBtn";

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const { handleRegister, isLoading } = useRegister();
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (username && email && password) {
            const result = await handleRegister({
                username: username,
                email: email,
                password: password,
            });
            if (result) navigate(router.program);
        }
    };

    return (
        <Layout>
            <PageBlock>
                <form className={style.registerForm} onSubmit={handleSubmit}>
                    <h1 className={style.registerTitle}>הוסף מתאמן חדש</h1>
                    <FormInput
                        id="username"
                        label="שם משתמש"
                        type="text"
                        value={username}
                        onChange={setUsername}
                        isRequired
                    />
                    <FormInput
                        id="email"
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
                    <FormBtn title="הוסף" isLoading={isLoading} />
                </form>
            </PageBlock>
        </Layout>
    );
};

export default RegisterPage;
