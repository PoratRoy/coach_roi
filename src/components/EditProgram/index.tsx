import style from "./EditProgram.module.css";
import useEditTable from "../../hooks/useEditTable";
import SelectUser from "../SelectUser";
import TableRow from "../TableRow";
import FormBtn from "../FormBtn";
import useUpdateWorkout from "../../hooks/api/useUpdateWorkout";
import React, { useEffect, useState } from "react";

const EditProgram: React.FC = () => {
    const [selectedUserId, setSelectedUserId] = useState<string>("");

    const { workoutData, fillTable, handleCellEdit, handleAddRow, handleDeleteRow } =
        useEditTable();
    const { updateWorkout, isLoading } = useUpdateWorkout(workoutData, selectedUserId);

    useEffect(() => {
        if (selectedUserId != "") {
            fillTable(selectedUserId);
        }
    }, [selectedUserId]);

    const handleSubmit = async () => {
        await updateWorkout();
    };

    return (
        <section className={style.workoutContainer}>
            <section className={style.workoutSelector}>
                <SelectUser selectedUserId={selectedUserId} setSelectedUserId={setSelectedUserId} />
            </section>

            <section className={style.workoutTop}>
                <button onClick={handleAddRow} className={style.addButton}>
                    הוסף תרגיל +
                </button>
            </section>

            <section className={style.tableContainer}>
                <table className={style.workoutTable}>
                    <thead>
                        <tr>
                            <th>תרגיל</th>
                            <th>קישור</th>
                            <th>סט</th>
                            <th>חזרות</th>
                            <th>מנוחה</th>
                            <th>משקל</th>
                            <th>הערות</th>
                            <th>פעולות</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workoutData.map((row) => (
                            <tr key={row.id}>
                                <TableRow
                                    value={row.exercise}
                                    id={row.id}
                                    name="exercise"
                                    handleCellEdit={handleCellEdit}
                                    placeholder="שם התרגיל"
                                />
                                <TableRow
                                    value={row.link}
                                    id={row.id}
                                    name="link"
                                    handleCellEdit={handleCellEdit}
                                    placeholder="קישור לתרגיל"
                                />

                                <TableRow
                                    value={row.sets}
                                    id={row.id}
                                    name="sets"
                                    handleCellEdit={handleCellEdit}
                                    placeholder="מספר"
                                />
                                <TableRow
                                    value={row.reps}
                                    id={row.id}
                                    name="reps"
                                    handleCellEdit={handleCellEdit}
                                    placeholder="מספר"
                                />

                                <TableRow
                                    value={row.rest}
                                    id={row.id}
                                    name="rest"
                                    handleCellEdit={handleCellEdit}
                                    placeholder="זמן"
                                />

                                <TableRow
                                    value={row.weight}
                                    id={row.id}
                                    name="weight"
                                    handleCellEdit={handleCellEdit}
                                    placeholder="ק״ג"
                                />
                                <TableRow
                                    value={row.notes}
                                    id={row.id}
                                    name="notes"
                                    handleCellEdit={handleCellEdit}
                                    placeholder="הערות"
                                />

                                <td>
                                    <button
                                        onClick={() => handleDeleteRow(row.id)}
                                        className={style.deleteButton}
                                    >
                                        מחק
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <FormBtn title="שמור אימון" isLoading={isLoading} onClick={handleSubmit} />
        </section>
    );
};

export default EditProgram;
