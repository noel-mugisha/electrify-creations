import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        "Electronics",
        "Smartphones", 
        "Laptops",
        "Audio",
        "Accessories",
        "Smart Home"
      ]
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Track Order", 
        "Returns",
        "Shipping Info",
        "Warranty",
        "Contact Us"
      ]
    },
    {
      title: "Company", 
      links: [
        "About Us",
        "Careers",
        "Press",
        "Blog",
        "Affiliate Program",
        "Bulk Orders"
      ]
    }
  ];

  return (
    <footer className="bg-gradient-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Latest Deals
            </h3>
            <p className="text-white/80 mb-6">
              Get exclusive offers, new product updates, and tech news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary"
              />
              <Button variant="premium" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              kapee.
            </h2>
            <p className="text-white/80 mb-6 max-w-md">
              Your trusted destination for premium electronics. We bring you the latest technology 
              with unmatched quality and customer service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-white/80">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-white/80">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span>support@kapee.com</span>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                <span>123 Tech Street, Digital City, TC 12345</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Button
                  key={index}
                  variant="glass"
                  size="icon"
                  className="bg-white/10 border-white/20 text-white hover:bg-primary/20 hover:border-primary/40 hover:text-primary transition-normal"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-4 text-primary">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white hover:text-primary transition-normal text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; 2024 Kapee Electronics. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;