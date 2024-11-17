import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Workout } from "../../models/types/workout";
import { useState } from "react";

const useUpdateWorkout = (workoutData: Workout[], selectedUserId: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const validation = (workoutData: Workout[]) => {
        // const hasEmptyFields = workoutData.some(
        //     (row) => !row.exercise || row.sets === 0 || !row.reps || !row.rest || !row.weight,
        // );
        return true;
    };

    const updateWorkout = async () => {
        if (validation(workoutData)) {
            if (selectedUserId !== "") {
                try {
                    setIsLoading(true);
                    workoutData.forEach((row) => {
                        row.userId = selectedUserId;
                    });

                    const userRef = doc(db, "Users", selectedUserId);

                    await updateDoc(userRef, {
                        workouts: workoutData || [],
                    });
                    setIsLoading(false);
                } catch (error) {
                    console.error("Error replacing workouts:", error);
                    setIsLoading(false);
                }
            }
        }
    };

    return { updateWorkout, isLoading };
};

export default useUpdateWorkout;
