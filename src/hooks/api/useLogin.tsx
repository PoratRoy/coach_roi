import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { useAuthContext } from "../../context/AuthContext";
import { LoginRequest } from "../../models/types/request";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";

const useLogin = () => {
    const { initializeUser } = useAuthContext();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const handleLogin = async (req: LoginRequest) => {
        const { email, password } = req;
        try {
            setIsLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (!user || !user.uid) return false;
            const userDoc = await getDoc(doc(db, "Users", user.uid));
            const userData = userDoc.data();
            initializeUser({ ...userData, uid: user.uid });
            setIsLoading(false);
            return true;
        } catch (error) {
            console.log("error:", error);
            setIsLoading(false);
            return false;
        }
    };

    return { handleLogin, isLoading };
};

export default useLogin;
