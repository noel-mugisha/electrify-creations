import { Users, Award, Globe, Heart, Target, Lightbulb, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We carefully curate only the finest electronics from trusted brands worldwide.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority. We go above and beyond to exceed expectations.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of trends to bring you the latest and greatest in technology.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Shop with confidence knowing your data and transactions are secure.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "100K+", label: "Happy Customers", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "99.9%", label: "Uptime", icon: Zap }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Electronics enthusiast with 15+ years in retail technology.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech innovator focused on creating seamless shopping experiences.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      bio: "Passionate about delivering exceptional customer service.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Kapee
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Your trusted partner in premium electronics since 2014
            </p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              We're passionate about bringing you the latest and greatest in consumer electronics, 
              from cutting-edge smartphones to premium audio equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-in fade-in slide-in-from-left-4">
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2014 by a team of technology enthusiasts, Kapee began as a small startup 
                  with a big dream: to make premium electronics accessible to everyone.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  What started as a passion project in a garage has grown into a global marketplace 
                  trusted by over 100,000 customers worldwide. We've built our reputation on three 
                  core principles: quality, service, and innovation.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we continue to push boundaries, partnering with leading brands to bring you 
                  the most exciting products in consumer electronics.
                </p>
              </div>
              
              <div className="animate-in fade-in slide-in-from-right-4">
                <Card className="glass-card p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={stat.label} className="text-center">
                        <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-3xl font-bold text-primary mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What We Stand For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} 
                    className="glass-card hover-lift text-center group animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={member.name} 
                    className="glass-card hover-lift text-center group animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl opacity-90 mb-8">
              "To democratize access to premium technology by providing exceptional products, 
              unmatched service, and innovative solutions that enhance people's lives."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="hover-lift">
                Shop Our Products
              </Button>
              <Button variant="outline" size="lg" className="hover-lift bg-white/10 border-white/30 text-white hover:bg-white/20">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-in fade-in slide-in-from-left-4">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop" 
                  alt="Sustainability"
                  className="rounded-lg shadow-large"
                />
              </div>
              
              <div className="animate-in fade-in slide-in-from-right-4">
                <h2 className="text-4xl font-bold mb-6">Committed to Sustainability</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe in responsible business practices that protect our planet for future generations.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    ✓ Eco-friendly packaging materials
                  </li>
                  <li className="flex items-center gap-3">
                    ✓ Electronic waste recycling programs
                  </li>
                  <li className="flex items-center gap-3">
                    ✓ Carbon-neutral shipping options
                  </li>
                  <li className="flex items-center gap-3">
                    ✓ Partnership with green technology brands
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;