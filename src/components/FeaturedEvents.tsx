import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  Users,
  ArrowRight,
  Music,
  Laugh,
  Heart
} from "lucide-react";

const FeaturedEvents = () => {
  const events = [
    {
      id: 1,
      title: "Classical Music Evening with Ustad Khan",
      artist: "Ravi Shankar Tribute",
      date: "Dec 28, 2024",
      time: "7:00 PM",
      venue: "Mumbai Cultural Center",
      location: "Bandra, Mumbai",
      price: "₹500",
      category: "Classical Music",
      categoryIcon: <Music className="w-4 h-4" />,
      attendees: 156,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      tags: ["Traditional", "Live Music", "Cultural"],
      isPopular: true,
    },
    {
      id: 2,
      title: "Bollywood Comedy Night",
      artist: "Kapil Sharma & Friends",
      date: "Dec 30, 2024",
      time: "8:00 PM",
      venue: "Phoenix Marketcity",
      location: "Kurla, Mumbai",
      price: "₹800",
      category: "Comedy",
      categoryIcon: <Laugh className="w-4 h-4" />,
      attendees: 234,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=300&fit=crop",
      tags: ["Comedy", "Hindi", "Entertainment"],
      isPopular: true,
    },
    {
      id: 3,
      title: "Kathak Dance Workshop",
      artist: "Pt. Birju Maharaj Academy",
      date: "Jan 5, 2025",
      time: "10:00 AM",
      venue: "Dance Academy",
      location: "Juhu, Mumbai",
      price: "₹1200",
      category: "Dance Workshop",
      categoryIcon: <Heart className="w-4 h-4" />,
      attendees: 45,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=300&fit=crop",
      tags: ["Workshop", "Classical Dance", "Learning"],
      isPopular: false,
    },
    {
      id: 4,
      title: "Sufi Music Night",
      artist: "Kailash Kher Live",
      date: "Jan 8, 2025",
      time: "7:30 PM",
      venue: "NSCI Dome",
      location: "Worli, Mumbai",
      price: "₹1500",
      category: "Sufi Music",
      categoryIcon: <Music className="w-4 h-4" />,
      attendees: 312,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=400&h=300&fit=crop",
      tags: ["Sufi", "Spiritual", "Live Concert"],
      isPopular: true,
    },
  ];

  return (
    <section className="py-20 bg-surface-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Featured Cultural Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked events celebrating India's rich cultural heritage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Card 
              key={event.id}
              className="group overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift shadow-cultural bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Popular Badge */}
                {event.isPopular && (
                  <Badge className="absolute top-3 left-3 bg-warning text-black font-semibold">
                    🔥 Trending
                  </Badge>
                )}

                {/* Category Badge */}
                <Badge className="absolute top-3 right-3 bg-primary text-white">
                  <span className="flex items-center space-x-1">
                    {event.categoryIcon}
                    <span className="text-xs">{event.category}</span>
                  </span>
                </Badge>

                {/* Price */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-primary font-bold">{event.price}</span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-secondary font-medium">{event.artist}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {event.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-warning fill-current" />
                    <span className="font-medium">{event.rating}</span>
                  </div>
                </div>

                {/* Book Button */}
                <Button 
                  variant="hero" 
                  className="w-full group"
                  size="sm"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="cultural" size="lg" className="px-8">
            View All Events
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;