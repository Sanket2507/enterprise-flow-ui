import React, { createContext, useContext, useState, useCallback } from "react";

export type AppRole = "admin" | "manager" | "employee";

interface User {
  id: string;
  name: string;
  email: string;
  role: AppRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (role: AppRole) => void;
  logout: () => void;
}

const MOCK_USERS: Record<AppRole, User> = {
  admin: { id: "1", name: "Sarah Chen", email: "sarah@company.com", role: "admin" },
  manager: { id: "2", name: "James Miller", email: "james@company.com", role: "manager" },
  employee: { id: "3", name: "Alex Johnson", email: "alex@company.com", role: "employee" },
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((role: AppRole) => {
    setUser(MOCK_USERS[role]);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
