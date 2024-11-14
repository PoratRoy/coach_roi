import { WorkoutRow } from "../types/workout";

export const initWorkout: WorkoutRow = {
    id: 1,
    exercise: "",
    sets: 0,
    reps: "",
    rest: "",
    weight: "",
    notes: "",
};

export const newWorkoutRow = (id: number): WorkoutRow => {
    return {
        id,
        exercise: "",
        sets: 0,
        reps: "",
        rest: "",
        weight: "",
        notes: "",
    } as WorkoutRow;
};
