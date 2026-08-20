import { createContext, useContext, useEffect, useState, useCallback } from "react";
import * as authApi from "../mock/api/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeChildId, setActiveChildId] = useState(null);

    useEffect(() => {
        authApi.getCurrentUser().then((u) => {
            setUser(u);
            setActiveChildId(u?.childId || null);
            setIsLoading(false);
        });
    }, []);

    const login = useCallback(async (email, password) => {
        const result = await authApi.login(email, password);
        if (result.ok) {
            setUser(result.user);
            setActiveChildId(result.user?.childId || null);
        }
        return result;
    }, []);

    const logout = useCallback(async () => {
        await authApi.logout();
        setUser(null);
        setActiveChildId(null);
    }, []);

    const refresh = useCallback(async () => {
        const u = await authApi.getCurrentUser();
        setUser(u);
        return u;
    }, []);

    const value = {
        user,
        role: user?.role || null,
        staffRole: user?.staffRole || null,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        refresh,
        // Demo-scoped: lets a parent with more than one child at the nursery
        // switch which child's data the dashboard shows, defaulting to the
        // child on their account. Not persisted across sessions.
        activeChildId: activeChildId || user?.childId || null,
        setActiveChildId,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
    return ctx;
}
