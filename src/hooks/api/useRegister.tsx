import { createUserWithEmailAndPassword } from "firebase/auth";
import { RegisterRequest } from "../../models/types/request";
import { auth, db } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuthContext } from "../../context/AuthContext";

const useRegister = () => {
    const {initializeUser} = useAuthContext();
    const handleRegister = async (req: RegisterRequest) => {
        const { username, email, password } = req;
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (!user) return false;
            initializeUser(user);
            await setDoc(doc(db, "Users", user.uid), {
                username,
                email,
            });
            return true;
        } catch (error) {
            console.log("error:", error);
            return false;
        }
    };

    return { handleRegister };
};

export default useRegister;
