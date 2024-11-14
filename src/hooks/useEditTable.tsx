import { useState } from "react";
import { WorkoutRow } from "../models/types/workout";
import { initWorkout, newWorkoutRow } from "../models/init/workout";

const useEditTable = () => {
    const [workoutData, setWorkoutData] = useState<WorkoutRow[]>([initWorkout]);
    // Handle cell edit
    const handleCellEdit = (id: number, field: keyof WorkoutRow, value: string | number) => {
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
        const newRow: WorkoutRow = newWorkoutRow(newId);
        setWorkoutData([...workoutData, newRow]);
    };

    // Delete row
    const handleDeleteRow = (id: number) => {
        setWorkoutData((prevData) => prevData.filter((row) => row.id !== id));
    };

    return { workoutData, handleCellEdit, handleAddRow, handleDeleteRow };
};

export default useEditTable;
