import React from "react";
import { Workout } from "../../models/types/workout";
import AreaInput from "../AreaInput";
import NumberInput from "../NumberInput";

type TableRowProps = {
    id: number;
    type?: "text" | "number";
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
    placeholder,
    type = "text",
}) => {
    return (
        <td>
            {type === "text" ? (
                <AreaInput
                    id={id}
                    value={value}
                    onChange={(v) => handleCellEdit(id, name, v)}
                    placeholder={placeholder}
                />
            ) : (
                <NumberInput id={id} value={value} onChange={(v) => handleCellEdit(id, name, v)} />
            )}
        </td>
    );
};

export default TableRow;
