import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Workout } from "../../models/types/workout";
import { useState } from "react";
import { useWorkoutContext } from "../../context/WorkoutContext";

const useUpdateWorkout = (workoutData: Workout[], selectedUserId: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { setAlert } = useWorkoutContext();

    const validateUrl = (string: string) => {
        try {
            const url = new URL(string);
            return url.protocol === "http:" || url.protocol === "https:";
        } catch (err) {
            return false;
        }
    };

    const validation = (workoutData: Workout[]) => {
        const hasEmptyFields = workoutData.some((row) => {
            if(row.link !== "" && !validateUrl(row.link || "")) {
                return true;
            } else {
                return !row.exercise
            }
        });
        return !hasEmptyFields;
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
                    setAlert("התוכנית עודכנה בהצלחה", "success", true);
                    setIsLoading(false);
                } catch (error) {
                    console.error("Error replacing workouts:", error);
                    setAlert("שגיאה בעדכון התוכנית", "error", true);
                    setIsLoading(false);
                }
            }
        } else {
            setAlert("לא כל הפרטים שהוזנו תקינים", "error", true);
        }
    };

    return { updateWorkout, isLoading };
};

export default useUpdateWorkout;
