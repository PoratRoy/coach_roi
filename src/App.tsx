import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import route from "./router/path.json";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import ProgramPage from "./pages/ProgramPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./router/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
        <HelmetProvider>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path={route.login} element={<LoginPage />} />
                        <Route element={<PrivateRoute />}>
                            <Route path={route.register} element={<RegisterPage />} />
                            <Route path={route.program} element={<ProgramPage />} />
                        </Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </HelmetProvider>
    );
}

export default App;
