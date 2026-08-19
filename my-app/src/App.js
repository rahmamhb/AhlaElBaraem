import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Annonces from "./Annonces";
import Programme from "./Programme";
import Gallery from "./Gallery";
import Home from "./Home"
import Nourrice from "./Nourrice";
import StaffCommentDashboard from "./StaffCommentDashboard";
import Parent from './Parent';

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import RegistrationPending from "./pages/auth/RegistrationPending";
import FinishRegistration from "./pages/auth/FinishRegistration";
import AdminLayout from "./pages/admin/AdminLayout";

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/Gallery" element={<Gallery />}></Route>
                    <Route path="/Annonces" element={<Annonces />}></Route>
                    <Route path="/Programmes" element={<Programme />}></Route>

                    <Route path="/connexion" element={<Login />}></Route>
                    <Route path="/inscription" element={<SignUp />}></Route>
                    <Route path="/inscription/en-attente" element={
                        <ProtectedRoute allowedRoles={["parent"]}><RegistrationPending /></ProtectedRoute>
                    }></Route>
                    <Route path="/inscription/finaliser" element={
                        <ProtectedRoute allowedRoles={["parent"]}><FinishRegistration /></ProtectedRoute>
                    }></Route>

                    <Route path="/Nourrice" element={
                        <ProtectedRoute allowedRoles={["staff"]} allowedStaffRoles={["nourrice"]}><Nourrice /></ProtectedRoute>
                    }></Route>
                    <Route path="/Orthophonist" element={
                        <ProtectedRoute allowedRoles={["staff"]} allowedStaffRoles={["orthophoniste"]}><StaffCommentDashboard staffRole="orthophoniste" /></ProtectedRoute>
                    }></Route>
                    <Route path="/Psychologue" element={
                        <ProtectedRoute allowedRoles={["staff"]} allowedStaffRoles={["psychologue"]}><StaffCommentDashboard staffRole="psychologue" /></ProtectedRoute>
                    }></Route>
                    <Route path="/Parent" element={
                        <ProtectedRoute allowedRoles={["parent"]}><Parent /></ProtectedRoute>
                    }></Route>
                    <Route path="/Admin" element={
                        <ProtectedRoute allowedRoles={["admin"]}><AdminLayout /></ProtectedRoute>
                    }></Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
