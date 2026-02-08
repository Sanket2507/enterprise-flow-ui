import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusVariant = "success" | "warning" | "destructive" | "info" | "default";

interface StatusBadgeProps {
  status: string;
  variant?: StatusVariant;
}

const variantStyles: Record<StatusVariant, string> = {
  success: "bg-success/10 text-success border-success/20 hover:bg-success/10",
  warning: "bg-warning/10 text-warning border-warning/20 hover:bg-warning/10",
  destructive: "bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/10",
  info: "bg-info/10 text-info border-info/20 hover:bg-info/10",
  default: "bg-muted text-muted-foreground border-border hover:bg-muted",
};

export function StatusBadge({ status, variant = "default" }: StatusBadgeProps) {
  return (
    <Badge variant="outline" className={cn("text-xs font-medium", variantStyles[variant])}>
      {status}
    </Badge>
  );
}
