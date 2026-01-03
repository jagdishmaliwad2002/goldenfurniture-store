import { motion } from "framer-motion";
import { ArrowRight, Star, Truck, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar, Footer } from "@/components/layout";

// Assets
import heroImage from "@assets/generated_images/luxury_living_room_with_golden_accents.png";
import productChair from "@assets/generated_images/golden_velvet_armchair.png";
import productTable from "@assets/generated_images/marble_dining_table_gold_legs.png";
import productBed from "@assets/generated_images/luxury_bedroom_interior.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Luxury Living Room" 
              className="w-full h-full object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          </div>
          
          <div className="container relative z-10 px-4 text-center text-white pt-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-sm bg-white/10">
                New Collection 2024
              </span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight tracking-tight">
                The Art of <br/>
                <span className="italic font-light text-primary-foreground/90">Golden Living</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto font-light leading-relaxed">
                Elevate your home with our exclusive collection of premium furniture. 
                Timeless design meets modern luxury.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none px-8 h-14 text-base tracking-wide min-w-[180px]">
                  Shop Collection
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-none px-8 h-14 text-base tracking-wide min-w-[180px]">
                  View Catalog
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Strip */}
        <section className="py-10 border-b bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="flex items-center justify-center gap-4 py-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg">Free Shipping</h4>
                  <p className="text-sm text-muted-foreground">On orders over $500</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg">Lifetime Warranty</h4>
                  <p className="text-sm text-muted-foreground">Certified quality protection</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">Dedicated concierge service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collection */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-16"
            >
              <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border/50 pb-6">
                <motion.div variants={fadeIn} className="max-w-2xl">
                  <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">Curated Excellence</h2>
                  <p className="text-muted-foreground text-lg font-light">
                    Handpicked pieces that define sophistication. Each item in our collection tells a story of craftsmanship and luxury.
                  </p>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Button variant="link" className="text-primary hover:text-primary/80 p-0 text-base group">
                    View all products <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Product 1 */}
                <motion.div variants={fadeIn} className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden bg-white mb-6 shadow-sm">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">New</span>
                    </div>
                    <img 
                      src={productChair} 
                      alt="Velvet Armchair" 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    <Button className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white text-black hover:bg-white/90 min-w-[140px] shadow-lg">
                      Add to Cart
                    </Button>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Living Room</p>
                    <h3 className="font-serif text-2xl group-hover:text-primary transition-colors">Royal Velvet Armchair</h3>
                    <p className="font-medium text-lg">$1,299.00</p>
                  </div>
                </motion.div>

                {/* Product 2 */}
                <motion.div variants={fadeIn} className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden bg-white mb-6 shadow-sm">
                    <img 
                      src={productTable} 
                      alt="Marble Dining Table" 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    <Button className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white text-black hover:bg-white/90 min-w-[140px] shadow-lg">
                      Add to Cart
                    </Button>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Dining Room</p>
                    <h3 className="font-serif text-2xl group-hover:text-primary transition-colors">Carrara Gold Dining Table</h3>
                    <p className="font-medium text-lg">$3,499.00</p>
                  </div>
                </motion.div>

                {/* Product 3 */}
                <motion.div variants={fadeIn} className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden bg-white mb-6 shadow-sm">
                     <div className="absolute top-4 left-4 z-10">
                      <span className="bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Best Seller</span>
                    </div>
                    <img 
                      src={productBed} 
                      alt="Luxury Bed Suite" 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    <Button className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white text-black hover:bg-white/90 min-w-[140px] shadow-lg">
                      Add to Cart
                    </Button>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Bedroom</p>
                    <h3 className="font-serif text-2xl group-hover:text-primary transition-colors">Imperial Tufted Suite</h3>
                    <p className="font-medium text-lg">$4,899.00</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Categories</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium">Shop by Room</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
              {/* Large Item */}
              <div className="lg:col-span-6 relative group overflow-hidden h-[300px] lg:h-full">
                <img 
                  src={heroImage} 
                  alt="Living Room" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="font-serif text-4xl mb-2">Living Room</h3>
                  <p className="text-white/80 mb-6 max-w-xs text-center">Sofas, Coffee Tables, and Accents</p>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black rounded-none">
                    Explore
                  </Button>
                </div>
              </div>

              {/* Right Column Stack */}
              <div className="lg:col-span-6 flex flex-col gap-6 h-full">
                <div className="flex-1 relative group overflow-hidden h-[300px] lg:h-auto">
                  <img 
                    src={productTable} 
                    alt="Dining" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="font-serif text-3xl mb-2">Dining Room</h3>
                    <Button variant="link" className="text-white hover:text-white/80 p-0 text-base">Shop Now</Button>
                  </div>
                </div>
                <div className="flex-1 relative group overflow-hidden h-[300px] lg:h-auto">
                  <img 
                    src={productBed} 
                    alt="Bedroom" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="font-serif text-3xl mb-2">Bedroom</h3>
                    <Button variant="link" className="text-white hover:text-white/80 p-0 text-base">Shop Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-8 text-white/90">
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl italic leading-relaxed max-w-4xl mx-auto mb-12">
              "The quality of the furniture is unmatched. Lunawada has completely transformed our living space into a sanctuary of elegance."
            </h2>
            <div className="space-y-1">
              <p className="font-bold text-lg tracking-wide uppercase">Sarah Jenkins</p>
              <p className="text-white/70 text-sm">Interior Designer, Mumbai</p>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 border-b">
          <div className="container mx-auto px-4 max-w-xl text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold">Join Our Exclusive Club</h2>
              <p className="text-muted-foreground">Subscribe to receive updates, access to exclusive deals, and more.</p>
            </div>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 h-12 px-4 border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
              <Button className="h-12 px-8 rounded-none">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">By subscribing you agree to our Terms & Conditions and Privacy Policy.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
