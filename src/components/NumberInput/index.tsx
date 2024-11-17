import React from "react";
import style from "./NumberInput.module.css";

type NumberInputProps = {
    id: number;
    value: string | undefined | number;
    onChange: (v: string) => void;
    placeholder?: string;
};

const NumberInput: React.FC<NumberInputProps> = ({ id, value, onChange, placeholder = "" }) => {
    return (
        <div className={style.numberInput}>
            <input
                type="number"
                className={style.numberInputInput}
                id={id.toString()}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
};

export default NumberInput;
