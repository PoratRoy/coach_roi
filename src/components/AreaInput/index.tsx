import React from "react";
import style from "./AreaInput.module.css";

type AreaInputProps = {
    id: number;
    value: string | undefined | number;
    onChange: (v: string) => void;
    placeholder?: string;
};

const AreaInput: React.FC<AreaInputProps> = ({ id, value, onChange, placeholder = "" }) => {

    return (
        <div className={style.areaInput}>
            <textarea
                className={style.areaInputInput}
                id={id.toString()}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
};

export default AreaInput;
