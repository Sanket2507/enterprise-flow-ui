import { useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { LogOut } from "lucide-react";
import { useAuth } from "@/store/auth-context";
import { getModulesForRole } from "@/utils/module-config";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AppSidebar() {
  const { user, logout } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const visibleModules = getModulesForRole(user.role);
  const initials = user.name.split(" ").map((n) => n[0]).join("");

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-bold text-sm">
            E
          </div>
          <span className="text-lg font-bold text-sidebar-primary-foreground group-data-[collapsible=icon]:hidden">
            ERP Suite
          </span>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 uppercase text-[10px] tracking-widest group-data-[collapsible=icon]:hidden">
            Modules
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {visibleModules.map((mod) => (
                <SidebarMenuItem key={mod.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={mod.path === "/" ? location.pathname === "/" : location.pathname.startsWith(mod.path)}
                    tooltip={mod.label}
                  >
                    <NavLink to={mod.path} end={mod.path === "/"}>
                      <mod.icon className={`h-4 w-4 ${mod.color}`} />
                      <span>{mod.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <SidebarSeparator />
        <div className="flex items-center gap-3 p-2 group-data-[collapsible=icon]:justify-center">
          <Avatar className="h-8 w-8 shrink-0">
            <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground text-xs">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-medium text-sidebar-primary-foreground truncate">{user.name}</p>
            <p className="text-xs text-sidebar-foreground/60 truncate capitalize">{user.role}</p>
          </div>
          <button
            onClick={logout}
            className="text-sidebar-foreground/60 hover:text-sidebar-primary-foreground transition-colors group-data-[collapsible=icon]:hidden"
            title="Sign out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
