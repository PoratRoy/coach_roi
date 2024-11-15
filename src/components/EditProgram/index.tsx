import style from "./EditProgram.module.css";
import useEditTable from "../../hooks/useEditTable";
import SelectUser from "../SelectUser";
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const EditProgram = () => {
    const { workoutData, fillTable, handleCellEdit, handleAddRow, handleDeleteRow } =
        useEditTable();
    const [selectedUserId, setSelectedUserId] = useState<string>("");

    useEffect(() => {
        if (selectedUserId != "") {
            fillTable(selectedUserId);
        }
    }, [selectedUserId]);

    const handleSubmit = async () => {
        // // Validate that no required fields are empty
        // const hasEmptyFields = workoutData.some(
        //     (row) => !row.exercise || row.sets === 0 || !row.reps || !row.rest || !row.weight,
        // );
        // if (hasEmptyFields) {
        //     alert("נא למלא את כל השדות הנדרשים");
        //     return;
        // }
        if (selectedUserId !== "") {
            workoutData.forEach((row) => {
                row.userId = selectedUserId;
            });

            const userRef = doc(db, "Users", selectedUserId);

            try {
                await updateDoc(userRef, {
                    workouts: workoutData || [],
                });
                console.log("Workout Data:", workoutData);
            } catch (error) {
                console.error("Error replacing workouts:", error);
            }
        }
    };

    return (
        <div className={style.workoutContainer}>
            <section>
                <SelectUser selectedUserId={selectedUserId} setSelectedUserId={setSelectedUserId} />
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
                                        type="text"
                                        value={row.link}
                                        onChange={(e) =>
                                            handleCellEdit(row.id, "link", e.target.value)
                                        }
                                        className={style.tableInput}
                                        placeholder="קישור לתרגיל"
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
