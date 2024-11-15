import React, { useEffect, useState } from "react";
import style from "./SelectUser.module.css";
import useGetUsers from "../../hooks/api/useGetUsers";

type SelectUserProps = {
    selectedUserId: string;
    setSelectedUserId: React.Dispatch<React.SetStateAction<string>>;
};

const SelectUser: React.FC<SelectUserProps> = ({ selectedUserId, setSelectedUserId }) => {
    const { usersOptions, fetchUsers } = useGetUsers();
    const [selected, setIsSelected] = useState(selectedUserId ? true : false);

    useEffect(() => {
        if (!usersOptions.length) {
            fetchUsers();
        }
    }, []);

    useEffect(() => {
        if (selectedUserId == "" && usersOptions.length) {
            setSelectedUserId(usersOptions[0].value);
        }
    }, [usersOptions]);

    useEffect(() => {
        setIsSelected(selectedUserId ? true : false);
    }, [selectedUserId]);

    const handleChnage = (value: string) => {
        setSelectedUserId(value);
        setIsSelected(value !== "" || selectedUserId ? true : false);
    };

    return (
        <div className={style.container}>
            <select
                style={{ color: selected ? "#333335" : "#8b8b8b" }}
                value={selectedUserId}
                onChange={(e) => handleChnage(e.target.value)}
                aria-label={"בחר מתאמן"}
            >
                <option value="" disabled>
                    בחר מתאמן
                </option>
                {usersOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectUser;
