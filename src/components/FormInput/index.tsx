import React from "react";
import style from "./FormInput.module.css";

type FormInputProps = {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: (v: string) => void;
    isRequired?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({
    id,
    label,
    type,
    value,
    onChange,
    isRequired = false,
}) => {
    return (
        <div className={style.formInput}>
            <label className={style.formInputLabel} htmlFor={id}>
                {label}
            </label>
            <input
                className={style.formInputInput}
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={isRequired}
                lang="he"
            />
        </div>
    );
};

export default FormInput;
