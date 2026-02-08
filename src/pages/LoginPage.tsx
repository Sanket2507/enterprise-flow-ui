import { Navigate } from "react-router-dom";
import { useAuth, type AppRole } from "@/store/auth-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Briefcase, User } from "lucide-react";

const roles: { role: AppRole; label: string; description: string; icon: typeof Shield }[] = [
  { role: "admin", label: "Administrator", description: "Full access to all modules & settings", icon: Shield },
  { role: "manager", label: "Manager", description: "Sales, Inventory, Finance, Manufacturing, Analytics", icon: Briefcase },
  { role: "employee", label: "Employee", description: "HR self-service & limited views", icon: User },
];

export default function LoginPage() {
  const { isAuthenticated, login } = useAuth();

  if (isAuthenticated) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-xl">
            E
          </div>
          <h1 className="text-2xl font-bold text-foreground">ERP Suite</h1>
          <p className="text-sm text-muted-foreground">Select a role to continue (demo mode)</p>
        </div>

        <div className="space-y-3">
          {roles.map(({ role, label, description, icon: Icon }) => (
            <Card
              key={role}
              className="cursor-pointer transition-all hover:border-primary hover:shadow-md"
              onClick={() => login(role)}
            >
              <CardContent className="flex items-center gap-4 p-4">
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-sm font-semibold">{label}</CardTitle>
                  <CardDescription className="text-xs">{description}</CardDescription>
                </div>
                <Button variant="ghost" size="sm">Sign in →</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground">
          SSO integration will replace this screen in production.
        </p>
      </div>
    </div>
  );
}
