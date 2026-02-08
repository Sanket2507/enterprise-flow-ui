import { PageHeader } from "@/components/shared/PageHeader";
import { KPICard } from "@/components/shared/KPICard";
import { DataTable, type Column } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Package, Warehouse, ArrowDownUp, AlertTriangle } from "lucide-react";

interface StockItem {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  warehouse: string;
  status: string;
}

const mockItems: StockItem[] = [
  { id: "1", name: "Widget A", sku: "WA-100", quantity: 342, warehouse: "Main", status: "In Stock" },
  { id: "2", name: "Gear B", sku: "GB-200", quantity: 12, warehouse: "Main", status: "Low Stock" },
  { id: "3", name: "Sensor C", sku: "SC-300", quantity: 0, warehouse: "East", status: "Out of Stock" },
  { id: "4", name: "Motor D", sku: "MD-400", quantity: 87, warehouse: "West", status: "In Stock" },
  { id: "5", name: "Cable E", sku: "CE-500", quantity: 5, warehouse: "Main", status: "Low Stock" },
];

const statusVar = (s: string) => {
  switch (s) { case "In Stock": return "success"; case "Low Stock": return "warning"; case "Out of Stock": return "destructive"; default: return "default" as const; }
};

const columns: Column<StockItem>[] = [
  { header: "Product", accessor: "name", className: "font-medium" },
  { header: "SKU", accessor: "sku" },
  { header: "Qty", accessor: (r) => <span className="font-mono">{r.quantity}</span> },
  { header: "Warehouse", accessor: "warehouse" },
  { header: "Status", accessor: (r) => <StatusBadge status={r.status} variant={statusVar(r.status)} /> },
];

export default function InventoryPage() {
  return (
    <div>
      <PageHeader title="Inventory" description="Track stock levels, warehouses, and movements." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KPICard title="Total SKUs" value="1,248" change="+32 new" changeType="positive" icon={Package} />
        <KPICard title="Warehouses" value="4" change="All active" changeType="neutral" icon={Warehouse} />
        <KPICard title="Movements Today" value="57" change="+12% vs avg" changeType="positive" icon={ArrowDownUp} />
        <KPICard title="Low Stock Alerts" value="7" change="3 critical" changeType="negative" icon={AlertTriangle} />
      </div>

      <DataTable columns={columns} data={mockItems} />
    </div>
  );
}
