import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from "recharts";

const revenueByModule = [
  { name: "Sales", value: 45000 }, { name: "Services", value: 28000 },
  { name: "Licensing", value: 18000 }, { name: "Support", value: 9000 },
];
const COLORS = ["hsl(221,83%,53%)", "hsl(262,83%,58%)", "hsl(142,71%,45%)", "hsl(25,95%,53%)"];

const inventoryTurnover = [
  { month: "Jan", rate: 4.2 }, { month: "Feb", rate: 4.5 }, { month: "Mar", rate: 3.8 },
  { month: "Apr", rate: 4.7 }, { month: "May", rate: 5.1 }, { month: "Jun", rate: 4.9 },
];

const cashFlow = [
  { month: "Jan", inflow: 52000, outflow: 38000 }, { month: "Feb", inflow: 48000, outflow: 42000 },
  { month: "Mar", inflow: 61000, outflow: 45000 }, { month: "Apr", inflow: 55000, outflow: 40000 },
  { month: "May", inflow: 72000, outflow: 48000 }, { month: "Jun", inflow: 68000, outflow: 51000 },
];

const headcount = [
  { month: "Jan", count: 128 }, { month: "Feb", count: 130 }, { month: "Mar", count: 133 },
  { month: "Apr", count: 135 }, { month: "May", count: 139 }, { month: "Jun", count: 142 },
];

export default function AnalyticsPage() {
  return (
    <div>
      <PageHeader title="Analytics" description="Cross-module insights and reporting." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-muted-foreground">Revenue by Source</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={revenueByModule} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {revenueByModule.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-muted-foreground">Inventory Turnover Rate</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={inventoryTurnover}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="hsl(var(--erp-inventory))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-muted-foreground">Cash Flow</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={cashFlow}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="inflow" stroke="hsl(var(--erp-finance))" fill="hsl(var(--erp-finance))" fillOpacity={0.2} />
                <Area type="monotone" dataKey="outflow" stroke="hsl(var(--destructive))" fill="hsl(var(--destructive))" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-muted-foreground">Headcount Growth</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={headcount}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="count" fill="hsl(var(--erp-hr))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
