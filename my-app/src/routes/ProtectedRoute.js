import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { roleHomePath } from "./roleHome";

const ProtectedRoute = ({ allowedRoles, allowedStaffRoles, children }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div className="flex h-screen w-screen items-center justify-center text-gray-dark">Chargement...</div>;
    }

    if (!user) {
        return <Navigate to="/connexion" replace />;
    }

    // Force parents through the registration flow before they can reach the app.
    if (user.role === "parent" && user.registrationStatus && user.registrationStatus !== "active") {
        const target = roleHomePath(user);
        return <Navigate to={target} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to={roleHomePath(user)} replace />;
    }

    if (allowedStaffRoles && user.role === "staff" && !allowedStaffRoles.includes(user.staffRole)) {
        return <Navigate to={roleHomePath(user)} replace />;
    }

    return children;
};

export default ProtectedRoute;
