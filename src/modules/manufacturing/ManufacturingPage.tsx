import { PageHeader } from "@/components/shared/PageHeader";
import { KPICard } from "@/components/shared/KPICard";
import { DataTable, type Column } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Factory, Cog, ClipboardList, Activity } from "lucide-react";

interface ProductionOrder {
  id: string;
  product: string;
  quantity: number;
  startDate: string;
  status: string;
}

const mockOrders: ProductionOrder[] = [
  { id: "PO-001", product: "Widget A", quantity: 500, startDate: "2026-02-01", status: "In Progress" },
  { id: "PO-002", product: "Gear B", quantity: 200, startDate: "2026-02-03", status: "Completed" },
  { id: "PO-003", product: "Sensor C", quantity: 1000, startDate: "2026-02-05", status: "Planned" },
  { id: "PO-004", product: "Motor D", quantity: 150, startDate: "2026-02-07", status: "In Progress" },
];

const statusVar = (s: string) => {
  switch (s) { case "Completed": return "success"; case "In Progress": return "info"; case "Planned": return "default"; default: return "default" as const; }
};

const columns: Column<ProductionOrder>[] = [
  { header: "Order ID", accessor: "id", className: "font-medium" },
  { header: "Product", accessor: "product" },
  { header: "Qty", accessor: (r) => <span className="font-mono">{r.quantity}</span> },
  { header: "Start Date", accessor: "startDate" },
  { header: "Status", accessor: (r) => <StatusBadge status={r.status} variant={statusVar(r.status)} /> },
];

export default function ManufacturingPage() {
  return (
    <div>
      <PageHeader title="Manufacturing" description="Production orders, BOM, and work centers." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KPICard title="Active Orders" value="12" change="4 this week" changeType="positive" icon={Factory} />
        <KPICard title="Work Centers" value="5" change="All operational" changeType="neutral" icon={Cog} />
        <KPICard title="BOMs" value="34" change="+2 new" changeType="neutral" icon={ClipboardList} />
        <KPICard title="Utilization" value="78%" change="+5% vs last week" changeType="positive" icon={Activity} />
      </div>

      <DataTable columns={columns} data={mockOrders} />
    </div>
  );
}
