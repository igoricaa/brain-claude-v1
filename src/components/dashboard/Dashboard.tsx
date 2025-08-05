import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts"
import { TrendingUp, TrendingDown, Calendar, DollarSign } from "lucide-react"

const trendData = [
  { date: "Jul 16", deals: 3.0 },
  { date: "Jul 17", deals: 2.8 },
  { date: "Jul 18", deals: 2.5 },
  { date: "Jul 19", deals: 2.7 },
  { date: "Jul 20", deals: 2.0 },
  { date: "Jul 21", deals: 2.2 },
  { date: "Jul 22", deals: 2.4 },
  { date: "Jul 23", deals: 2.3 },
  { date: "Jul 24", deals: 2.5 },
  { date: "Jul 25", deals: 2.6 },
  { date: "Jul 26", deals: 2.7 },
  { date: "Jul 27", deals: 2.8 },
  { date: "Jul 28", deals: 2.9 },
  { date: "Jul 29", deals: 3.0 },
  { date: "Jul 30", deals: 2.8 }
]

const fundingStages = [
  { name: "Seed", value: 35, color: "#0ea5e9" },
  { name: "Series A", value: 25, color: "#3b82f6" }, 
  { name: "Series B", value: 20, color: "#6366f1" },
  { name: "Late Stage", value: 15, color: "#8b5cf6" },
  { name: "Other", value: 5, color: "#a855f7" }
]

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  subtitle,
  icon: Icon 
}: {
  title: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  subtitle?: string
  icon: any
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {change && (
        <div className="flex items-center text-xs text-muted-foreground">
          {changeType === "positive" && <TrendingUp className="mr-1 h-3 w-3 text-green-500" />}
          {changeType === "negative" && <TrendingDown className="mr-1 h-3 w-3 text-red-500" />}
          <span className={
            changeType === "positive" ? "text-green-500" : 
            changeType === "negative" ? "text-red-500" : 
            "text-muted-foreground"
          }>
            {change}
          </span>
        </div>
      )}
      {subtitle && (
        <p className="text-xs text-muted-foreground mt-1">
          {subtitle}
        </p>
      )}
    </CardContent>
  </Card>
)

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Deals Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of deal flow and performance metrics
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Today"
          value="0"
          change="Yesterday: 0"
          changeType="neutral"
          icon={Calendar}
        />
        <MetricCard
          title="This Week"
          value="0"
          change="Last Week: -2"
          changeType="negative"
          icon={TrendingUp}
        />
        <MetricCard
          title="This Month"
          value="0"
          change="Last Month: -7"
          changeType="negative"
          icon={Calendar}
        />
        <MetricCard
          title="Total Deals"
          value="7"
          change="This Year: 7"
          changeType="positive"
          subtitle="All time"
          icon={DollarSign}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Deal Flow Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="date" 
                  className="text-muted-foreground"
                  fontSize={12}
                />
                <YAxis 
                  className="text-muted-foreground"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="deals" 
                  stroke="#0ea5e9" 
                  strokeWidth={2}
                  dot={{ fill: "#0ea5e9", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "#0ea5e9", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Funding Stages</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fundingStages}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {fundingStages.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {fundingStages.map((stage) => (
                <div key={stage.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div 
                      className="mr-2 h-3 w-3 rounded-full" 
                      style={{ backgroundColor: stage.color }}
                    />
                    <span>{stage.name}</span>
                  </div>
                  <span className="font-medium">{stage.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}