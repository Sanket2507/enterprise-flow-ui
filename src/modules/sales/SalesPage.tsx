import { PageHeader } from "@/components/shared/PageHeader";
import { KPICard } from "@/components/shared/KPICard";
import { DataTable, type Column } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, DollarSign, TrendingUp, Users, Plus } from "lucide-react";

interface Order {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: string;
  items: number;
}

const mockOrders: Order[] = [
  { id: "ORD-001", customer: "Acme Corp", date: "2026-02-07", total: "$12,400", status: "Completed", items: 5 },
  { id: "ORD-002", customer: "GlobalTech", date: "2026-02-06", total: "$8,750", status: "Processing", items: 3 },
  { id: "ORD-003", customer: "StarMedia", date: "2026-02-06", total: "$3,200", status: "Pending", items: 2 },
  { id: "ORD-004", customer: "BrightSoft", date: "2026-02-05", total: "$15,900", status: "Completed", items: 8 },
  { id: "ORD-005", customer: "NovaTech", date: "2026-02-04", total: "$6,300", status: "Cancelled", items: 4 },
];

const statusVariant = (s: string) => {
  switch (s) { case "Completed": return "success"; case "Processing": return "info"; case "Pending": return "warning"; case "Cancelled": return "destructive"; default: return "default" as const; }
};

const columns: Column<Order>[] = [
  { header: "Order ID", accessor: "id", className: "font-medium" },
  { header: "Customer", accessor: "customer" },
  { header: "Date", accessor: "date" },
  { header: "Items", accessor: "items" },
  { header: "Total", accessor: "total", className: "font-medium" },
  { header: "Status", accessor: (row) => <StatusBadge status={row.status} variant={statusVariant(row.status)} /> },
];

export default function SalesPage() {
  return (
    <div>
      <PageHeader
        title="Sales"
        description="Manage orders, customers, and product catalog."
        actions={<Button><Plus className="mr-2 h-4 w-4" /> New Order</Button>}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KPICard title="Total Orders" value="189" change="+14% this month" changeType="positive" icon={ShoppingCart} />
        <KPICard title="Revenue" value="$46,550" change="+8.2%" changeType="positive" icon={DollarSign} />
        <KPICard title="Avg Order Value" value="$246" change="-2.1%" changeType="negative" icon={TrendingUp} />
        <KPICard title="Active Customers" value="64" change="+5 new" changeType="positive" icon={Users} />
      </div>

      <DataTable columns={columns} data={mockOrders} />
    </div>
  );
}
