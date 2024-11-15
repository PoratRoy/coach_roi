import { Workout } from "../types/workout";

export const initWorkout: Workout = {
    id: 1,
    userId: "",
    exercise: "",
    link: "",
    sets: 0,
    reps: "",
    rest: "",
    weight: "",
    notes: "",
};

export const newWorkoutRow = (id: number): Workout => {
    return {
        id,
        exercise: "",
        userId: "",
        link: "",
        sets: 0,
        reps: "",
        rest: "",
        weight: "",
        notes: "",
    } as Workout;
};
