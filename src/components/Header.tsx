import { Search, Menu, User, MapPin, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20 safe-area-top">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🎭</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gradient-primary">SangamEvents</h1>
              <p className="text-xs text-muted-foreground">Local India</p>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search events, artists, venues..."
                className="pl-10 border-primary/20 focus:border-primary"
              />
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Mumbai</span>
            </div>
          </div>

          {/* Navigation & User Actions */}
          <div className="flex items-center space-x-2">
            {/* Notifications - Mobile Priority */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-accent">
                3
              </Badge>
            </Button>
            
            <Button variant="ghost" size="sm" className="hidden lg:flex">
              List Your Event
            </Button>
            <Button variant="cultural" size="sm" className="hidden lg:flex">
              Join as Artist
            </Button>
            <Button variant="outline" size="icon">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;