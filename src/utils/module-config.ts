import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  DollarSign,
  Users,
  Factory,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { type AppRole } from "@/store/auth-context";

export interface ModuleConfig {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
  color: string;
  roles: AppRole[];
}

export const modules: ModuleConfig[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/", color: "text-primary", roles: ["admin", "manager", "employee"] },
  { id: "sales", label: "Sales", icon: ShoppingCart, path: "/sales", color: "text-erp-sales", roles: ["admin", "manager"] },
  { id: "inventory", label: "Inventory", icon: Package, path: "/inventory", color: "text-erp-inventory", roles: ["admin", "manager"] },
  { id: "finance", label: "Finance", icon: DollarSign, path: "/finance", color: "text-erp-finance", roles: ["admin", "manager"] },
  { id: "hr", label: "HR", icon: Users, path: "/hr", color: "text-erp-hr", roles: ["admin", "manager", "employee"] },
  { id: "manufacturing", label: "Manufacturing", icon: Factory, path: "/manufacturing", color: "text-erp-manufacturing", roles: ["admin", "manager"] },
  { id: "analytics", label: "Analytics", icon: BarChart3, path: "/analytics", color: "text-erp-analytics", roles: ["admin", "manager"] },
];

export function getModulesForRole(role: AppRole): ModuleConfig[] {
  return modules.filter((m) => m.roles.includes(role));
}
