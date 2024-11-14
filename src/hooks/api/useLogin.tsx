import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { useAuthContext } from "../../context/AuthContext";
import { LoginRequest } from "../../models/types/request";
import { doc, getDoc } from "firebase/firestore";

const useLogin = () => {
    const { initializeUser } = useAuthContext();
    const handleLogin = async (req: LoginRequest) => {
        const { email, password } = req;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (!user || !user.uid) return false;
            const userDoc = await getDoc(doc(db, "Users", user.uid));
            const userData = userDoc.data();
            initializeUser({ ...userData, uid: user.uid });
            return true;
        } catch (error) {
            console.log("error:", error);
            return false;
        }
    };

    return { handleLogin };
};

export default useLogin;
