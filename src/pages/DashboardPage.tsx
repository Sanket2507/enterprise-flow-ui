import { PageHeader } from "@/components/shared/PageHeader";
import { KPICard } from "@/components/shared/KPICard";
import { useAuth } from "@/store/auth-context";
import { DollarSign, ShoppingCart, Package, Users, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 42000 }, { month: "Feb", revenue: 38000 },
  { month: "Mar", revenue: 55000 }, { month: "Apr", revenue: 47000 },
  { month: "May", revenue: 62000 }, { month: "Jun", revenue: 58000 },
  { month: "Jul", revenue: 71000 }, { month: "Aug", revenue: 67000 },
];

const ordersData = [
  { month: "Jan", orders: 120 }, { month: "Feb", orders: 98 },
  { month: "Mar", orders: 145 }, { month: "Apr", orders: 132 },
  { month: "May", orders: 167 }, { month: "Jun", orders: 155 },
  { month: "Jul", orders: 189 }, { month: "Aug", orders: 178 },
];

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      <PageHeader
        title={`Welcome back, ${user?.name?.split(" ")[0]}`}
        description="Here's what's happening across your organization today."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KPICard title="Revenue (MTD)" value="$71,400" change="+12.5% vs last month" changeType="positive" icon={DollarSign} />
        <KPICard title="New Orders" value="189" change="+22 this week" changeType="positive" icon={ShoppingCart} />
        <KPICard title="Inventory Alerts" value="7" change="3 critical" changeType="negative" icon={AlertTriangle} />
        <KPICard title="Active Employees" value="142" change="+3 new hires" changeType="neutral" icon={Users} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip />
                <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Order Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={ordersData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip />
                <Line type="monotone" dataKey="orders" stroke="hsl(var(--erp-sales))" strokeWidth={2} dot={{ fill: "hsl(var(--erp-sales))" }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
