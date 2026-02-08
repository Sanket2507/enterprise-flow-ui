import { PageHeader } from "@/components/shared/PageHeader";
import { KPICard } from "@/components/shared/KPICard";
import { DataTable, type Column } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/button";
import { DollarSign, FileText, CreditCard, TrendingDown, Plus } from "lucide-react";

interface Invoice {
  id: string;
  customer: string;
  amount: string;
  dueDate: string;
  status: string;
}

const mockInvoices: Invoice[] = [
  { id: "INV-001", customer: "Acme Corp", amount: "$12,400", dueDate: "2026-02-15", status: "Paid" },
  { id: "INV-002", customer: "GlobalTech", amount: "$8,750", dueDate: "2026-02-20", status: "Sent" },
  { id: "INV-003", customer: "StarMedia", amount: "$3,200", dueDate: "2026-01-30", status: "Overdue" },
  { id: "INV-004", customer: "BrightSoft", amount: "$15,900", dueDate: "2026-02-28", status: "Draft" },
];

const statusVar = (s: string) => {
  switch (s) { case "Paid": return "success"; case "Sent": return "info"; case "Overdue": return "destructive"; case "Draft": return "default"; default: return "default" as const; }
};

const columns: Column<Invoice>[] = [
  { header: "Invoice", accessor: "id", className: "font-medium" },
  { header: "Customer", accessor: "customer" },
  { header: "Amount", accessor: "amount", className: "font-medium" },
  { header: "Due Date", accessor: "dueDate" },
  { header: "Status", accessor: (r) => <StatusBadge status={r.status} variant={statusVar(r.status)} /> },
];

export default function FinancePage() {
  return (
    <div>
      <PageHeader title="Finance" description="Invoices, payments, and financial overview." actions={<Button><Plus className="mr-2 h-4 w-4" /> New Invoice</Button>} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KPICard title="Revenue (MTD)" value="$71,400" change="+12.5%" changeType="positive" icon={DollarSign} />
        <KPICard title="Outstanding" value="$24,350" change="4 invoices" changeType="neutral" icon={FileText} />
        <KPICard title="Received" value="$47,050" change="+8.3%" changeType="positive" icon={CreditCard} />
        <KPICard title="Overdue" value="$3,200" change="1 invoice" changeType="negative" icon={TrendingDown} />
      </div>

      <DataTable columns={columns} data={mockInvoices} />
    </div>
  );
}
