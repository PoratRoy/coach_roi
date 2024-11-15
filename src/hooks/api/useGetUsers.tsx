import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState } from "react";
import { User } from "../../models/types/auth";
import { useAuthContext } from "../../context/AuthContext";
import { SelectOption } from "../../models/types";
import { useWorkoutContext } from "../../context/WorkoutContext";

const useGetUsers = () => {
    const { currentUser } = useAuthContext();
    const { setUsers } = useWorkoutContext();
    const [usersOptions, setUsersOptions] = useState<SelectOption[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError(null);

            let usersQuery = collection(db, "Users");

            const q = query(usersQuery);
            const querySnapshot = await getDocs(q);

            const allUsers = querySnapshot.docs
                .map((doc) => {
                    return {
                        uid: doc.id,
                        ...doc.data(),
                    } as User;
                })
                .filter((user) => user.uid !== currentUser?.uid);
            setUsers(allUsers);
            const usersData = allUsers.map(
                (user) =>
                    ({
                        value: user.uid,
                        label: user.username,
                    }) as SelectOption,
            );
            setUsersOptions(usersData);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to fetch users");
            console.error("Error fetching users:", err);
        } finally {
            setLoading(false);
        }
    };

    return { usersOptions, loading, error, fetchUsers };
};

export default useGetUsers;
