import React from "react";
import style from "./StaticProgram.module.css";

const workoutData = [
    {
        id: 1,
        exercise: "לחיצת חזה",
        sets: 3,
        reps: "12",
        rest: "90 שניות",
        weight: '60 ק"ג',
        notes: "לשמור על גב ישר",
    },
    {
        id: 2,
        exercise: "מתח",
        sets: 4,
        reps: "8-10",
        rest: "2 דקות",
        weight: "משקל גוף",
        notes: "אחיזה רחבה",
    },
    {
        id: 3,
        exercise: "סקוואט",
        sets: 5,
        reps: "5",
        rest: "3 דקות",
        weight: '100 ק"ג',
        notes: "עומק מלא",
    },
    {
        id: 4,
        exercise: "מקבילים",
        sets: 3,
        reps: "12",
        rest: "90 שניות",
        weight: "משקל גוף",
        notes: "תנועה מבוקרת",
    },
    {
        id: 5,
        exercise: "דדליפט",
        sets: 4,
        reps: "8",
        rest: "2 דקות",
        weight: '120 ק"ג',
        notes: "לשמור על גב ישר",
    },
];

const StaticProgram: React.FC = () => {
    return (
        <section className={style.tableContainer}>
            <table className={style.workoutTable}>
                <thead>
                    <tr>
                        <th>שם</th>
                        <th>קישור</th>
                        <th>סט</th>
                        <th>חזרות</th>
                        <th>מנוחה</th>
                        <th>משקל</th>
                        <th>הערות</th>
                    </tr>
                </thead>
                <tbody>
                    {workoutData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.exercise}</td>
                            <td>http://link</td>
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
