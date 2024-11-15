import React from "react";
import style from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import router from "../../router/path.json";
import { useAuthContext } from "../../context/AuthContext";
import { useWorkoutContext } from "../../context/WorkoutContext";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const { logout, isAdmin } = useAuthContext();
    const { clearUsers } = useWorkoutContext();

    const handleLogout = async () => {
        await logout();
        clearUsers();
        navigate(router.login);
    };

    return (
        <nav className={style.header}>
            <ul>
                {isAdmin ? (
                    <li>
                        <Link to={router.program}>תוכניות</Link>
                    </li>
                ) : null}
                {isAdmin ? (
                    <li>
                        <Link to={router.register}>רישום מתאמן חדש</Link>
                    </li>
                ) : null}

                <li>
                    <button onClick={handleLogout}>התנתקות</button>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
