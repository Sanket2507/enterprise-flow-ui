import { PageHeader } from "@/components/shared/PageHeader";
import { KPICard } from "@/components/shared/KPICard";
import { DataTable, type Column } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Users, UserPlus, CalendarDays, Building2 } from "lucide-react";

interface Employee {
  id: string;
  name: string;
  department: string;
  role: string;
  status: string;
}

const mockEmployees: Employee[] = [
  { id: "1", name: "Sarah Chen", department: "Engineering", role: "Lead Developer", status: "Active" },
  { id: "2", name: "James Miller", department: "Sales", role: "Sales Manager", status: "Active" },
  { id: "3", name: "Emily Davis", department: "HR", role: "HR Specialist", status: "On Leave" },
  { id: "4", name: "Michael Brown", department: "Finance", role: "Accountant", status: "Active" },
  { id: "5", name: "Lisa Wang", department: "Engineering", role: "QA Engineer", status: "Active" },
];

const columns: Column<Employee>[] = [
  { header: "Name", accessor: "name", className: "font-medium" },
  { header: "Department", accessor: "department" },
  { header: "Role", accessor: "role" },
  { header: "Status", accessor: (r) => <StatusBadge status={r.status} variant={r.status === "Active" ? "success" : "warning"} /> },
];

export default function HRPage() {
  return (
    <div>
      <PageHeader title="Human Resources" description="Employee directory, departments, and leave management." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KPICard title="Total Employees" value="142" change="+3 this month" changeType="positive" icon={Users} />
        <KPICard title="Open Positions" value="8" change="5 engineering" changeType="neutral" icon={UserPlus} />
        <KPICard title="On Leave Today" value="4" change="2 planned" changeType="neutral" icon={CalendarDays} />
        <KPICard title="Departments" value="6" change="All active" changeType="neutral" icon={Building2} />
      </div>

      <DataTable columns={columns} data={mockEmployees} />
    </div>
  );
}
