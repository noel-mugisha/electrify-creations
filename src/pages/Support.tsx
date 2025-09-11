import { Phone, Mail, MessageCircle, Clock, MapPin, Headphones, Shield, Truck, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Support = () => {
  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      action: "Start Chat",
      available: "Available 24/7",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      action: "Send Email",
      available: "24-48 hour response",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const faqItems = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all items. Products must be in original condition with all accessories."
    },
    {
      question: "Do you offer warranty on products?",
      answer: "Yes, all our products come with manufacturer warranty. Extended warranty options are available at checkout."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) and overnight options are available."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries worldwide. International shipping times vary by location."
    }
  ];

  const serviceFeatures = [
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "SSL encryption and secure payment processing"
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Free express delivery on orders over $100"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Knowledgeable staff ready to help you"
    },
    {
      icon: CreditCard,
      title: "Easy Returns",
      description: "Hassle-free 30-day return policy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How Can We Help You?
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Our dedicated support team is here to assist you with any questions or concerns
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {supportOptions.map((option, index) => (
              <Card key={option.title} 
                    className="glass-card hover-lift cursor-pointer group text-center animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {option.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  
                  <Badge variant="secondary" className="mb-4">
                    {option.available}
                  </Badge>
                  
                  <Button className="w-full hover-lift">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john.doe@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select className="w-full px-3 py-2 border rounded-lg bg-background">
                      <option>Select a topic</option>
                      <option>Order Support</option>
                      <option>Product Question</option>
                      <option>Technical Support</option>
                      <option>Return/Exchange</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Please describe your question or concern in detail..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full hover-lift" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} 
                    className="glass-card animate-in fade-in slide-in-from-bottom-2"
                    style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Support?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature, index) => (
              <div key={feature.title}
                   className="text-center animate-in fade-in slide-in-from-bottom-4"
                   style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
              <p className="text-muted-foreground mb-1">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
            </div>
            
            <div className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '150ms' }}>
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Email Support</h3>
              <p className="text-muted-foreground mb-1">support@kapee.com</p>
              <p className="text-sm text-muted-foreground">24-48 hour response</p>
            </div>
            
            <div className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '300ms' }}>
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-1">123 Electronics Ave</p>
              <p className="text-sm text-muted-foreground">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;