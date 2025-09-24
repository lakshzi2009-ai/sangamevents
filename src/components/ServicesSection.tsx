import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Ticket, 
  Users, 
  ShoppingBag, 
  Calendar, 
  ArrowRight,
  Music,
  Laugh,
  Heart,
  Palette
} from "lucide-react";
import artistsImage from "@/assets/artists-showcase.jpg";
import eventsImage from "@/assets/events-festival.jpg";
import vendorsImage from "@/assets/vendors-services.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <Ticket className="w-8 h-8" />,
      title: "Discover & Book Shows",
      description: "From classical concerts to comedy nights, folk performances to Bollywood events - discover and book amazing local shows instantly.",
      image: eventsImage,
      features: ["Real-time booking", "Digital tickets", "Event recommendations", "Social sharing"],
      color: "primary",
      categories: [
        { icon: <Music className="w-4 h-4" />, name: "Music Concerts" },
        { icon: <Laugh className="w-4 h-4" />, name: "Comedy Shows" },
        { icon: <Heart className="w-4 h-4" />, name: "Cultural Events" },
        { icon: <Palette className="w-4 h-4" />, name: "Art Exhibitions" },
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Hire Local Artists",
      description: "Book talented local artists for your private events, weddings, corporate functions, and celebrations directly through our platform.",
      image: artistsImage,
      features: ["Artist portfolios", "Direct booking", "Secure payments", "Performance guarantee"],
      color: "secondary",
      categories: [
        { icon: <Music className="w-4 h-4" />, name: "Musicians" },
        { icon: <Users className="w-4 h-4" />, name: "Dancers" },
        { icon: <Laugh className="w-4 h-4" />, name: "Comedians" },
        { icon: <Palette className="w-4 h-4" />, name: "Folk Artists" },
      ]
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Find Event Vendors",
      description: "Everything you need for perfect events - from catering and decorations to sound systems and photography services.",
      image: vendorsImage,
      features: ["Verified vendors", "Instant quotes", "Package deals", "Quality assurance"],
      color: "accent",
      categories: [
        { icon: <Heart className="w-4 h-4" />, name: "Catering" },
        { icon: <Palette className="w-4 h-4" />, name: "Decoration" },
        { icon: <Music className="w-4 h-4" />, name: "Sound & Lights" },
        { icon: <Users className="w-4 h-4" />, name: "Photography" },
      ]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Full Event Management",
      description: "Let our experts handle everything - from planning and coordination to execution. Perfect for weddings, corporate events, and celebrations.",
      image: eventsImage,
      features: ["Complete planning", "Venue booking", "Vendor coordination", "24/7 support"],
      color: "success",
      categories: [
        { icon: <Heart className="w-4 h-4" />, name: "Weddings" },
        { icon: <Users className="w-4 h-4" />, name: "Corporate" },
        { icon: <Palette className="w-4 h-4" />, name: "Festivals" },
        { icon: <Calendar className="w-4 h-4" />, name: "Private Events" },
      ]
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Your Cultural Event Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to discover, create, and celebrate India's rich cultural heritage
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden border-2 border-${service.color}/20 hover:border-${service.color} transition-all duration-300 hover-lift shadow-cultural`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r from-${service.color}/80 to-transparent`}></div>
                <div className="absolute top-4 left-4">
                  <div className={`p-3 bg-${service.color} text-white rounded-xl shadow-vibrant`}>
                    {service.icon}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-gradient-cultural mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent>
                {/* Categories */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.categories.map((category, catIndex) => (
                    <div key={catIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      {category.icon}
                      <span>{category.name}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className={`w-2 h-2 bg-${service.color} rounded-full`}></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={service.color as any} 
                  className="w-full group"
                >
                  Explore {service.title.split(' ')[0]}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Categories */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gradient-cultural mb-8">
            Trending Event Categories
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "🎵 Classical Music",
              "😂 Stand-up Comedy", 
              "💃 Folk Dance",
              "🎭 Theater",
              "🎪 Cultural Festivals",
              "🎨 Art Workshops",
              "🎊 Wedding Celebrations",
              "🏢 Corporate Events"
            ].map((category, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="hover:bg-primary hover:text-white border-primary/30"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;