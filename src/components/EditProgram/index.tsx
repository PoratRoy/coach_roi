import style from "./EditProgram.module.css";
import useEditTable from "../../hooks/useEditTable";
import { WorkoutRow } from "../../models/types/workout";
import SelectUser from "../SelectUser";

interface WorkoutSubmitData {
    date: string;
    exercises: Omit<WorkoutRow, "id">[];
}

const EditProgram = () => {
    const { workoutData, handleCellEdit, handleAddRow, handleDeleteRow } = useEditTable();

    const handleSubmit = () => {
        // Validate that no required fields are empty
        const hasEmptyFields = workoutData.some(
            (row) => !row.exercise || row.sets === 0 || !row.reps || !row.rest || !row.weight,
        );

        if (hasEmptyFields) {
            alert("נא למלא את כל השדות הנדרשים");
            return;
        }

        // Create submit data object
        const submitData: WorkoutSubmitData = {
            date: new Date().toISOString(),
            exercises: workoutData.map(({ id, ...rest }) => rest), // Remove the id field from each exercise
        };

        // Log the data
        console.log("Workout Data:", submitData);
    };

    return (
        <div className={style.workoutContainer}>
            <section>
                <SelectUser/>
            </section>
            <br />
            <div className={style.header}>
                <button onClick={handleAddRow} className={style.addButton}>
                    הוסף תרגיל +
                </button>
            </div>
            <div className={style.tableContainer}>
                <table className={style.workoutTable}>
                    <thead>
                        <tr>
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
                                <td>
                                    <input
                                        type="text"
                                        value={row.exercise}
                                        onChange={(e) =>
                                            handleCellEdit(row.id, "exercise", e.target.value)
                                        }
                                        className={style.tableInput}
                                        placeholder="שם התרגיל"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={row.sets}
                                        onChange={(e) =>
                                            handleCellEdit(row.id, "sets", e.target.value)
                                        }
                                        className={style.tableInputCenter}
                                        min="0"
                                        placeholder="מספר"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={row.reps}
                                        onChange={(e) =>
                                            handleCellEdit(row.id, "reps", e.target.value)
                                        }
                                        className={style.tableInputCenter}
                                        placeholder="מספר"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={row.rest}
                                        onChange={(e) =>
                                            handleCellEdit(row.id, "rest", e.target.value)
                                        }
                                        className={style.tableInputCenter}
                                        placeholder="זמן"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={row.weight}
                                        onChange={(e) =>
                                            handleCellEdit(row.id, "weight", e.target.value)
                                        }
                                        className={style.tableInputCenter}
                                        placeholder="ק״ג"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={row.notes}
                                        onChange={(e) =>
                                            handleCellEdit(row.id, "notes", e.target.value)
                                        }
                                        className={style.tableInput}
                                        placeholder="הערות"
                                    />
                                </td>
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
            </div>
            <div className={style.submitContainer}>
                <button onClick={handleSubmit} className={style.submitButton}>
                    שמור אימון
                </button>
            </div>
        </div>
    );
};

export default EditProgram;
