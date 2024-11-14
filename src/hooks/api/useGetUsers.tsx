import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState } from "react";
import { User } from "../../models/types/auth";
import { useAuthContext } from "../../context/AuthContext";
import { SelectOption } from "../../models/types";

const useGetUsers = () => {
    const { currentUser } = useAuthContext();
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

            const usersData = querySnapshot.docs
                .filter((doc) => doc.id !== currentUser?.uid)
                .map(
                    (doc) =>
                        ({
                            value: doc.id,
                            label: (doc.data() as User).username,
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
