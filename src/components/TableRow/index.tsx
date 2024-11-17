import React from "react";
import style from "./TableRow.module.css";
import { Workout } from "../../models/types/workout";

type TableRowProps = {
    type: string;
    id: number;
    name: keyof Workout;
    value: string | undefined | number;
    placeholder: string;
    handleCellEdit: (id: number, field: keyof Workout, value: string | number) => void;
};

const TableRow: React.FC<TableRowProps> = ({
    value,
    id,
    name,
    handleCellEdit,
    type,
    placeholder,
}) => {
    return (
        <td>
            <input
                type={type}
                value={value}
                onChange={(e) => handleCellEdit(id, name, e.target.value)}
                className={style.tableInput}
                placeholder={placeholder}
            />
        </td>
    );
};

export default TableRow;
