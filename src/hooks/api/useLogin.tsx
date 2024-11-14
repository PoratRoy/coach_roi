import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useAuthContext } from "../../context/AuthContext";
import { LoginRequest } from "../../models/types/request";

const useLogin = () => {
    const { initializeUser } = useAuthContext();
    const handleLogin = async (req: LoginRequest) => {
        const { email, password } = req;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (!user) return false;
            initializeUser(user);
            return true;
        } catch (error) {
            console.log("error:", error);
            return false;
        }
    };

    return { handleLogin };
};

export default useLogin;
