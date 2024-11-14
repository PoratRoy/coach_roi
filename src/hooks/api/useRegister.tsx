import { createUserWithEmailAndPassword } from "firebase/auth";
import { RegisterRequest } from "../../models/types/request";
import { auth, db } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { User } from "../../models/types/auth";

const useRegister = () => {
    const handleRegister = async (req: RegisterRequest) => {
        const { username, email, password } = req;
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (!user || !user.uid) return false;
            const newUser: User = {
                uid: user.uid,
                email: user.email,
                username,
                role: "user",
            };
            const { uid, ...dbUser } = newUser;
            await setDoc(doc(db, "Users", user.uid), dbUser);
            return true;
        } catch (error) {
            console.log("error:", error);
            return false;
        }
    };

    return { handleRegister };
};

export default useRegister;
