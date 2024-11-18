import React from "react";
import style from "./StaticProgram.module.css";
import { useAuthContext } from "../../context/AuthContext";
import { initWorkout } from "../../models/init/workout";
import { IoMdLink } from "react-icons/io";

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
                            {row.link && row.link !== "" ? (
                                <td className={style.centerText} style={{ fontSize: 30 }}>
                                    <a href={row.link} target="_blank">
                                        <IoMdLink />
                                    </a>
                                </td>
                            ) : (
                                <td className={style.centerText}>אין קישורים נוספים</td>
                            )}
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
