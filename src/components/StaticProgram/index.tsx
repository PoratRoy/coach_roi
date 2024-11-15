import React from "react";
import style from "./StaticProgram.module.css";
import { useAuthContext } from "../../context/AuthContext";
import { initWorkout } from "../../models/init/workout";

const StaticProgram: React.FC = () => {
    const { currentUser } = useAuthContext();

    return (
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
                    </tr>
                </thead>
                <tbody>
                    {(currentUser?.workouts || [initWorkout]).map((row) => (
                        <tr key={row.id}>
                            <td>{row.exercise}</td>
                            <td>{row.link}</td>
                            <td className={style.centerText}>{row.sets}</td>
                            <td className={style.centerText}>{row.reps}</td>
                            <td className={style.centerText}>{row.rest}</td>
                            <td className={style.centerText}>{row.weight}</td>
                            <td>{row.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default StaticProgram;
