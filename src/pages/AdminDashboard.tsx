import { useState } from "react";
import { 
  Users, 
  ShoppingBag, 
  TrendingUp, 
  DollarSign,
  Package,
  Activity,
  MoreHorizontal,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  UserPlus,
  Settings,
  BarChart3,
  PieChart,
  LogOut
} from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart as RechartsPieChart, Cell, ResponsiveContainer, Pie } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Chart data
  const revenueData = [
    { month: "Jan", revenue: 4000, orders: 240, users: 400 },
    { month: "Feb", revenue: 3000, orders: 139, users: 300 },
    { month: "Mar", revenue: 2000, orders: 980, users: 200 },
    { month: "Apr", revenue: 2780, orders: 390, users: 278 },
    { month: "May", revenue: 1890, orders: 480, users: 189 },
    { month: "Jun", revenue: 2390, orders: 380, users: 239 },
    { month: "Jul", revenue: 3490, orders: 430, users: 349 }
  ];

  const categoryData = [
    { name: "Electronics", value: 400, fill: "hsl(var(--primary))" },
    { name: "Clothing", value: 300, fill: "hsl(var(--secondary))" },
    { name: "Home & Garden", value: 200, fill: "hsl(var(--accent))" },
    { name: "Sports", value: 150, fill: "hsl(var(--muted))" }
  ];

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "hsl(var(--primary))"
    },
    orders: {
      label: "Orders", 
      color: "hsl(var(--secondary))"
    },
    users: {
      label: "Users",
      color: "hsl(var(--accent))"
    }
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Admin logged out");
  };

  // Mock data for demonstration
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "Total Orders",
      value: "1,429",
      change: "+19% from last month",
      icon: ShoppingBag,
      trend: "up"
    },
    {
      title: "Active Users",
      value: "2,651",
      change: "+12.5% from last month",
      icon: Users,
      trend: "up"
    },
    {
      title: "Products Sold",
      value: "3,847",
      change: "+7.2% from last month",
      icon: Package,
      trend: "up"
    }
  ];

  const recentOrders = [
    { id: "ORD001", customer: "John Doe", product: "iPhone 15 Pro", amount: "$999", status: "Completed", date: "2024-01-15" },
    { id: "ORD002", customer: "Jane Smith", product: "AirPods Pro", amount: "$249", status: "Processing", date: "2024-01-15" },
    { id: "ORD003", customer: "Bob Johnson", product: "MacBook Air", amount: "$1299", status: "Shipped", date: "2024-01-14" },
    { id: "ORD004", customer: "Alice Brown", product: "Apple Watch", amount: "$399", status: "Pending", date: "2024-01-14" },
    { id: "ORD005", customer: "Mike Wilson", product: "iPad Pro", amount: "$799", status: "Completed", date: "2024-01-13" }
  ];

  const topProducts = [
    { name: "iPhone 15 Pro", sales: "324", revenue: "$323,676", trend: "+12%" },
    { name: "AirPods Pro", sales: "245", revenue: "$61,005", trend: "+8%" },
    { name: "MacBook Air", sales: "156", revenue: "$202,644", trend: "+15%" },
    { name: "Apple Watch", sales: "189", revenue: "$75,411", trend: "+5%" },
    { name: "iPad Pro", sales: "134", revenue: "$107,066", trend: "+9%" }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "destructive" | "secondary"> = {
      "Completed": "default",
      "Processing": "secondary",
      "Shipped": "default",
      "Pending": "destructive"
    };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "products", label: "Products", icon: Package },
    { id: "users", label: "Users", icon: Users },
    { id: "analytics", label: "Analytics", icon: PieChart },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Settings className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Admin Panel
              </h1>
            </div>
            
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
              
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all text-destructive hover:bg-destructive/10 hover:text-destructive mt-4"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
                  <p className="text-muted-foreground">Welcome back, Admin! Here's what's happening with your store.</p>
                </div>
                <Button className="bg-gradient-hero hover:shadow-glow transition-all">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="hover-lift">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <stat.icon className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <p className="text-xs text-success mt-1 flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {stat.change}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Chart */}
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-primary" />
                      Revenue Overview
                    </CardTitle>
                    <CardDescription>Monthly revenue trends over the last 7 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-64">
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="hsl(var(--primary))" 
                          fillOpacity={1} 
                          fill="url(#fillRevenue)" 
                        />
                      </AreaChart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Top Products */}
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-primary" />
                      Top Products
                    </CardTitle>
                    <CardDescription>Best performing products this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topProducts.map((product, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <div>
                            <p className="font-medium text-foreground">{product.name}</p>
                            <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-foreground">{product.revenue}</p>
                            <p className="text-sm text-success">{product.trend}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Orders & Users Chart */}
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Orders & Users Growth
                    </CardTitle>
                    <CardDescription>Monthly orders and user acquisition</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-64">
                      <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Line 
                          type="monotone" 
                          dataKey="orders" 
                          stroke="hsl(var(--secondary))" 
                          strokeWidth={3}
                          dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 4 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="users" 
                          stroke="hsl(var(--accent))" 
                          strokeWidth={3}
                          dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Category Distribution */}
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-primary" />
                      Sales by Category
                    </CardTitle>
                    <CardDescription>Product category distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-64">
                        <RechartsPieChart>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <ChartLegend content={<ChartLegendContent />} />
                      </RechartsPieChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Orders */}
              <Card className="hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5 text-primary" />
                        Recent Orders
                      </CardTitle>
                      <CardDescription>Latest orders from your customers</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search orders..." className="pl-10 w-64" />
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentOrders.map((order) => (
                        <TableRow key={order.id} className="hover:bg-muted/50">
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.product}</TableCell>
                          <TableCell className="font-medium">{order.amount}</TableCell>
                          <TableCell>{getStatusBadge(order.status)}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center gap-2 justify-end">
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Orders Management</h1>
                  <p className="text-muted-foreground">Manage all customer orders and track their status.</p>
                </div>
                <Button className="bg-gradient-hero hover:shadow-glow transition-all">
                  <Plus className="h-4 w-4 mr-2" />
                  New Order
                </Button>
              </div>
              
              {/* Orders would be displayed here */}
              <Card className="p-12 text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Orders Management</h3>
                <p className="text-muted-foreground">Detailed orders management interface would be implemented here.</p>
              </Card>
            </div>
          )}

          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Products Management</h1>
                  <p className="text-muted-foreground">Add, edit, and manage your product catalog.</p>
                </div>
                <Button className="bg-gradient-hero hover:shadow-glow transition-all">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </div>
              
              <Card className="p-12 text-center">
                <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Products Management</h3>
                <p className="text-muted-foreground">Product catalog management interface would be implemented here.</p>
              </Card>
            </div>
          )}

          {activeTab === "users" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Users Management</h1>
                  <p className="text-muted-foreground">Manage customer accounts and user permissions.</p>
                </div>
                <Button className="bg-gradient-hero hover:shadow-glow transition-all">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </div>
              
              <Card className="p-12 text-center">
                <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Users Management</h3>
                <p className="text-muted-foreground">User management interface would be implemented here.</p>
              </Card>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Analytics & Reports</h1>
                <p className="text-muted-foreground">View detailed analytics and generate reports.</p>
              </div>
              
              <Card className="p-12 text-center">
                <PieChart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground">Advanced analytics and reporting features would be implemented here.</p>
              </Card>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Admin Settings</h1>
                <p className="text-muted-foreground">Configure your admin panel and store settings.</p>
              </div>
              
              <Card className="p-12 text-center">
                <Settings className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Settings Panel</h3>
                <p className="text-muted-foreground">Admin settings and configuration options would be implemented here.</p>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;