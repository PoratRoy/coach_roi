import { useState } from "react";
import { Workout } from "../models/types/workout";
import { initWorkout, newWorkoutRow } from "../models/init/workout";
import { useWorkoutContext } from "../context/WorkoutContext";

const useEditTable = () => {
    const { users } = useWorkoutContext();
    const [workoutData, setWorkoutData] = useState<Workout[]>([initWorkout]);
    // Handle cell edit
    const handleCellEdit = (id: number, field: keyof Workout, value: string | number) => {
        setWorkoutData((prevData) =>
            prevData.map((row) =>
                row.id === id
                    ? {
                          ...row,
                          [field]: field === "sets" ? Number(value) || 0 : value,
                      }
                    : row,
            ),
        );
    };

    // Add new row
    const handleAddRow = () => {
        const newId = Math.max(...workoutData.map((row) => row.id)) + 1;
        const newRow: Workout = newWorkoutRow(newId);
        setWorkoutData([...workoutData, newRow]);
    };

    // Delete row
    const handleDeleteRow = (id: number) => {
        setWorkoutData((prevData) => prevData.filter((row) => row.id !== id));
    };

    const fillTable = (selectedUserId: string) => {
        const user = users.find((user) => user.uid === selectedUserId);
        if (user) {
            setWorkoutData(user.workouts || [initWorkout]);
        }
    }

    return { workoutData, fillTable, handleCellEdit, handleAddRow, handleDeleteRow };
};

export default useEditTable;
