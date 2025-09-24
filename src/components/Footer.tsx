import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "For Users",
      links: [
        "Discover Events",
        "Book Tickets",
        "Event Categories",
        "Mobile App",
        "Gift Vouchers"
      ]
    },
    {
      title: "For Artists",
      links: [
        "Register as Artist",
        "Artist Dashboard",
        "Pricing Plans",
        "Success Stories",
        "Resources"
      ]
    },
    {
      title: "For Vendors",
      links: [
        "Vendor Registration",
        "Vendor Portal",
        "Business Tools",
        "Partnership",
        "Support"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press",
        "Blog",
        "Contact"
      ]
    }
  ];

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", 
    "Hyderabad", "Pune", "Ahmedabad", "Surat", "Jaipur"
  ];

  return (
    <footer className="bg-background-secondary border-t border-primary/20">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gradient-primary mb-4">
              Stay Updated with Cultural Events
            </h3>
            <p className="text-muted-foreground mb-6">
              Get notified about amazing local events, artist performances, and cultural celebrations in your city
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 border-primary/20"
              />
              <Button variant="hero" className="sm:w-auto">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🎭</span>
                </div>
                <div>
                  <h1 className="font-bold text-xl text-gradient-primary">SangamEvents</h1>
                  <p className="text-xs text-muted-foreground">Local India</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                India's premier platform for discovering local cultural events, 
                booking artists, and celebrating our rich heritage together.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>hello@sangamevents.in</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-3">
                {[
                  { icon: <Facebook className="w-4 h-4" />, color: "hover:text-blue-600" },
                  { icon: <Twitter className="w-4 h-4" />, color: "hover:text-blue-400" },
                  { icon: <Instagram className="w-4 h-4" />, color: "hover:text-pink-600" },
                  { icon: <Youtube className="w-4 h-4" />, color: "hover:text-red-600" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`border-primary/20 ${social.color} transition-colors`}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 text-primary">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Cities Section */}
          <Separator className="my-8" />
          <div>
            <h4 className="font-semibold mb-4 text-primary">We're Live In</h4>
            <div className="flex flex-wrap gap-2">
              {cities.map((city, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-primary/20 hover:bg-primary hover:text-white text-xs"
                >
                  {city}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <Separator />
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap gap-4">
              <span>© 2024 SangamEvents. All rights reserved.</span>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;