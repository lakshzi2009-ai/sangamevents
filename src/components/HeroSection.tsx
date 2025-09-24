import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-events.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Indian Cultural Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-float hidden lg:block">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-vibrant">
          <div className="flex items-center space-x-2 text-white">
            <Star className="w-5 h-5 text-warning" />
            <span className="text-sm font-medium">10K+ Artists</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 right-20 animate-float delay-300 hidden lg:block">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-vibrant">
          <div className="flex items-center space-x-2 text-white">
            <Calendar className="w-5 h-5 text-success" />
            <span className="text-sm font-medium">1000+ Events</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover India's
            <span className="text-gradient-cultural block">Vibrant Culture</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            From classical concerts to comedy shows, hire local artists, find vendors, 
            and book amazing cultural events near you
          </p>

          {/* Search Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-vibrant max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search events, artists, comedy shows..."
                  className="pl-12 h-12 border-white/20 bg-white/20 text-white placeholder:text-gray-300"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Your city"
                  className="pl-12 h-12 border-white/20 bg-white/20 text-white placeholder:text-gray-300"
                />
              </div>
              <Button variant="hero" size="lg" className="h-12 px-8">
                Explore Events
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              🎪 Book Shows
            </Button>
            <Button variant="cultural" size="lg" className="text-lg px-8 py-3">
              🎨 Hire Artists
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-black">
              🛍️ Find Vendors
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-white/80">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-warning">50K+</span>
              <span>Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-success">10K+</span>
              <span>Local Artists</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-accent">500+</span>
              <span>Cities Covered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;