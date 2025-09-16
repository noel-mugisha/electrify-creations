import { useState } from "react";
import {
  User,
  ShoppingBag,
  Heart,
  Settings,
  CreditCard,
  MapPin,
  Bell,
  Shield,
  Package,
  Truck,
  Star,
  Edit,
  Eye,
  Calendar,
  Download,
  Filter,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Mock user data
  const userInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    memberSince: "January 2023",
    totalOrders: 24,
    totalSpent: "$3,247.89",
    loyaltyPoints: 1250,
    avatar: "/api/placeholder/80/80"
  };

  const recentOrders = [
    {
      id: "ORD001",
      date: "2024-01-15",
      total: "$299.99",
      status: "Delivered",
      items: ["iPhone 15 Case", "AirPods Pro"],
      tracking: "TRK123456789"
    },
    {
      id: "ORD002",
      date: "2024-01-10",
      total: "$149.99",
      status: "Shipped",
      items: ["Wireless Charger"],
      tracking: "TRK987654321"
    },
    {
      id: "ORD003",
      date: "2024-01-05",
      total: "$599.99",
      status: "Processing",
      items: ["Smart Watch", "Watch Band"],
      tracking: "TRK456789123"
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "MacBook Air M2",
      price: "$1,299.00",
      originalPrice: "$1,499.00",
      image: "/api/placeholder/200/200",
      inStock: true,
      discount: "13% OFF"
    },
    {
      id: 2,
      name: "iPad Pro 12.9\"",
      price: "$899.00",
      originalPrice: "$999.00",
      image: "/api/placeholder/200/200",
      inStock: true,
      discount: "10% OFF"
    },
    {
      id: 3,
      name: "AirPods Max",
      price: "$449.00",
      originalPrice: "$549.00",
      image: "/api/placeholder/200/200",
      inStock: false,
      discount: "18% OFF"
    }
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "John Doe",
      address: "123 Main Street",
      city: "New York, NY 10001",
      isDefault: true
    },
    {
      id: 2,
      type: "Work",
      name: "John Doe",
      address: "456 Business Ave",
      city: "New York, NY 10002",
      isDefault: false
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "destructive" | "secondary"> = {
      "Delivered": "default",
      "Shipped": "secondary",
      "Processing": "destructive"
    };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  const sidebarItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "payments", label: "Payment Methods", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <Avatar className="h-10 w-10">
                <AvatarImage src={userInfo.avatar} alt={userInfo.name} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-semibold text-foreground">My Account</h1>
                <p className="text-xs text-muted-foreground">Welcome back!</p>
              </div>
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
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeTab === "profile" && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
                  <p className="text-muted-foreground">Manage your account information and preferences.</p>
                </div>
                <Button className="bg-gradient-hero hover:shadow-glow transition-all">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              {/* Profile Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="hover-lift">
                  <CardContent className="p-6 text-center">
                    <ShoppingBag className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{userInfo.totalOrders}</p>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardContent className="p-6 text-center">
                    <CreditCard className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{userInfo.totalSpent}</p>
                    <p className="text-sm text-muted-foreground">Total Spent</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardContent className="p-6 text-center">
                    <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{userInfo.loyaltyPoints}</p>
                    <p className="text-sm text-muted-foreground">Loyalty Points</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">1+</p>
                    <p className="text-sm text-muted-foreground">Years Member</p>
                  </CardContent>
                </Card>
              </div>

              {/* Profile Information */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={userInfo.avatar} alt={userInfo.name} />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-lg font-semibold text-foreground">{userInfo.name}</p>
                        <p className="text-muted-foreground">Premium Member</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Email</label>
                        <p className="text-foreground">{userInfo.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Phone</label>
                        <p className="text-foreground">{userInfo.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Member Since</label>
                        <p className="text-foreground">{userInfo.memberSince}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-primary" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <div>
                            <p className="font-medium text-foreground">Order {order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-foreground">{order.total}</p>
                            {getStatusBadge(order.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">My Orders</h1>
                  <p className="text-muted-foreground">Track and manage your order history.</p>
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

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <Card key={order.id} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div>
                            <h3 className="font-semibold text-foreground">Order {order.id}</h3>
                            <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                          </div>
                          {getStatusBadge(order.status)}
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-foreground">{order.total}</p>
                          <p className="text-sm text-muted-foreground">{order.items.length} items</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Items:</p>
                          <p className="text-foreground">{order.items.join(", ")}</p>
                          {order.tracking && (
                            <p className="text-xs text-muted-foreground mt-2">
                              Tracking: {order.tracking}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <Truck className="h-4 w-4 mr-2" />
                            Track Order
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "wishlist" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">My Wishlist</h1>
                  <p className="text-muted-foreground">Save items you love for later purchase.</p>
                </div>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Share Wishlist
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.map((item) => (
                  <Card key={item.id} className="hover-lift">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-muted/20 rounded-t-lg flex items-center justify-center">
                        <Package className="h-16 w-16 text-muted-foreground" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {item.discount}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-lg font-bold text-foreground">{item.price}</span>
                          <span className="text-sm text-muted-foreground line-through">
                            {item.originalPrice}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 bg-gradient-hero hover:shadow-glow transition-all" 
                            size="sm"
                            disabled={!item.inStock}
                          >
                            {item.inStock ? "Add to Cart" : "Out of Stock"}
                          </Button>
                          <Button variant="outline" size="sm">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "addresses" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Delivery Addresses</h1>
                  <p className="text-muted-foreground">Manage your saved delivery addresses.</p>
                </div>
                <Button className="bg-gradient-hero hover:shadow-glow transition-all">
                  <MapPin className="h-4 w-4 mr-2" />
                  Add Address
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.map((address) => (
                  <Card key={address.id} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-foreground">{address.type}</h3>
                            {address.isDefault && (
                              <Badge variant="default" className="text-xs">Default</Badge>
                            )}
                          </div>
                          <p className="text-foreground font-medium">{address.name}</p>
                          <p className="text-muted-foreground">{address.address}</p>
                          <p className="text-muted-foreground">{address.city}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          {address.isDefault ? "Default" : "Set Default"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Other tabs would show similar placeholder content */}
          {["payments", "notifications", "security", "settings"].includes(activeTab) && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  {sidebarItems.find(item => item.id === activeTab)?.label}
                </h1>
                <p className="text-muted-foreground">
                  This section would contain the {activeTab} management interface.
                </p>
              </div>
              
              <Card className="p-12 text-center">
                {sidebarItems.find(item => item.id === activeTab)?.icon && (
                  <div className="mb-4">
                    {(() => {
                      const IconComponent = sidebarItems.find(item => item.id === activeTab)?.icon;
                      return IconComponent ? <IconComponent className="h-16 w-16 text-muted-foreground mx-auto" /> : null;
                    })()}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {sidebarItems.find(item => item.id === activeTab)?.label}
                </h3>
                <p className="text-muted-foreground">
                  {activeTab} management features would be implemented here.
                </p>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
