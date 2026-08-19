import { createContext, useContext, useEffect, useState, useCallback } from "react";
import * as authApi from "../mock/api/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        authApi.getCurrentUser().then((u) => {
            setUser(u);
            setIsLoading(false);
        });
    }, []);

    const login = useCallback(async (email, password) => {
        const result = await authApi.login(email, password);
        if (result.ok) setUser(result.user);
        return result;
    }, []);

    const logout = useCallback(async () => {
        await authApi.logout();
        setUser(null);
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
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
    return ctx;
}
