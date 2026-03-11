import { motion } from "framer-motion";
import { ArrowRight, Star, Truck, ShieldCheck, Clock, Lock, Armchair, Briefcase, LayoutGrid, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar, Footer } from "@/components/layout";
import { useState } from "react";

// Assets
import heroImage from "@assets/generated_images/luxury_living_room_with_golden_accents.png";
import customSofa from "@assets/generated_images/bespoke_customized_red_sofa.png";
import officeChair from "@assets/generated_images/modern_office_chair_luxury.png";
import tijoriSafe from "@assets/generated_images/luxury_steel_tijori_safe.png";
import lockerUnit from "@assets/generated_images/luxury_steel_locker_unit.png";
import productBed from "@assets/generated_images/luxury_bedroom_interior.png";
import productTable from "@assets/generated_images/marble_dining_table_gold_legs.png";

// New User Assets
import luxuryBedMain from "@assets/WhatsApp_Image_2026-03-01_at_3.51.53_PM_1773126897082.jpeg";
import bedroomSet from "@assets/WhatsApp_Image_2026-03-01_at_12.31.50_PM_1773126912875.jpeg";
import tvUnitMain from "@assets/WhatsApp_Image_2026-03-01_at_12.08.47_PM_1773126915686.jpeg";
import diningSetMain from "@assets/WhatsApp_Image_2026-03-01_at_12.03.06_PM_1773126917884.jpeg";
import bunkBed from "@assets/WhatsApp_Image_2026-03-01_at_11.43.39_AM_1773126920501.jpeg";
import officeChairGrey from "@assets/WhatsApp_Image_2026-03-01_at_11.31.57_AM_1773126934803.jpeg";
import wardrobeModern from "@assets/WhatsApp_Image_2026-03-01_at_11.43.18_AM_1773126941095.jpeg";
import sofaBlueSet from "@assets/WhatsApp_Image_2026-03-01_at_11.27.10_AM_1773126954948.jpeg";
import sofaBlackSet from "@assets/WhatsApp_Image_2026-03-01_at_11.30.56_AM_1773126960729.jpeg";
import wardrobeSlide from "@assets/WhatsApp_Image_2026-03-01_at_11.43.18_AM_1773126968140.jpeg";
import sofaGoldBlack from "@assets/WhatsApp_Image_2026-03-01_at_11.27.10_AM_1773217328933.jpeg";
import sofaBlueTone from "@assets/WhatsApp_Image_2026-03-01_at_11.26.41_AM_1773217491066.jpeg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

const luxuryProducts = [
  {
    name: "Royal Blue Velvet Sectional",
    price: 42500,
    category: "Sofa",
    img: sofaBlueSet,
    tag: "Top Choice",
    productId: "123456789"
  },
  {
    name: "Luxury Gold & Black Sectional",
    price: 29000,
    category: "Sofa",
    img: sofaGoldBlack,
    tag: "Bestseller",
    productId: "123456789"
  },
  {
    name: "Premium Blue & White Sectional",
    price: 29000,
    category: "Sofa",
    img: sofaBlueTone,
    tag: "Bestseller",
    productId: "123456789"
  },
  {
    name: "Midnight Noir Corner Sofa",
    price: 38900,
    category: "Sofa",
    img: sofaBlackSet,
    tag: "Premium",
    productId: "123456789"
  },
  {
    name: "Imperial Gold Inlay Bed",
    price: 22000,
    category: "Bedroom",
    img: luxuryBedMain,
    tag: "Featured",
    productId: "123456789"
  },
  {
    name: "Master Bedroom Suite",
    price: 34500,
    category: "Bedroom",
    img: bedroomSet,
    tag: "Luxury",
    productId: "123456789"
  },
  {
    name: "Heritage Teak Dining Set",
    price: 28500,
    category: "Dining",
    img: diningSetMain,
    tag: "Classic",
    productId: "123456789"
  },
  {
    name: "Executive Grey Throne",
    price: 12800,
    category: "Office",
    img: officeChairGrey,
    tag: "Ergonomic",
    productId: "123456789"
  },
  {
    name: "Modern Sliding Wardrobe",
    price: 26500,
    category: "Storage",
    img: wardrobeSlide,
    tag: "Space Saver",
    productId: "123456789"
  },
  {
    name: "Aura LED Media Center",
    price: 21800,
    category: "Living",
    img: tvUnitMain,
    tag: "Modern",
    productId: "123456789"
  },
  {
    name: "Industrial Metal Bunk Bed",
    price: 18500,
    category: "Bedroom",
    img: bunkBed,
    tag: "Kids",
    productId: "123456789"
  }
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] md:h-[90vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={luxuryBedMain} 
              alt="Luxury Bed Display" 
              fetchPriority="high"
              className="w-full h-full object-cover brightness-[0.75]"
              style={{ objectPosition: 'center 60%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent opacity-80" />
          </div>
          
          <div className="container relative z-10 px-4 text-center text-white pt-10 md:pt-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4 md:space-y-6 max-w-4xl mx-auto"
            >
              <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-sm bg-white/10">
                Since 2010 • Lunawada
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight">
                Crafting <span className="italic font-light text-primary-foreground/90">Comfort</span> <br className="hidden sm:block"/>
                & Elegance
              </h1>
              <p className="text-base md:text-xl text-white/80 max-w-xl mx-auto font-light leading-relaxed px-4">
                Premium furniture tailored to your lifestyle. Explore our new collection of sofas, beds, and almirahs.
              </p>
              <div className="pt-6 md:pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                <Button size="lg" className="w-full sm:w-auto bg-red-600 text-white hover:bg-red-700 rounded-none px-8 h-12 md:h-14 text-sm md:text-base tracking-wide min-w-[180px]">
                  Shop Collection
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10 rounded-none px-8 h-12 md:h-14 text-sm md:text-base tracking-wide min-w-[180px]">
                  Explore Bespoke
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
              <h2 className="font-serif text-3xl md:text-5xl font-medium">Our Specialized Range</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">Providing high-quality solutions for your home and office in Gujarat.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { icon: Armchair, label: "Sofa", img: sofaBlueSet },
                { icon: Briefcase, label: "Office", img: officeChair },
                { icon: Lock, label: "Tijori", img: tijoriSafe },
                { icon: LayoutGrid, label: "Lockers", img: lockerUnit },
                { icon: Star, label: "Beds", img: luxuryBedMain },
                { icon: ArrowRight, label: "Dining", img: diningSetMain },
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer text-center space-y-3 md:space-y-4">
                  <div className="aspect-square bg-secondary/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-105 overflow-hidden relative mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-full md:h-full">
                    <img 
                      src={item.img} 
                      alt={item.label} 
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40" 
                    />
                    <item.icon className="h-6 w-6 sm:h-8 sm:w-8 relative z-10" />
                  </div>
                  <h3 className="font-medium uppercase tracking-widest text-[10px] md:text-sm">{item.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
              <h2 className="font-serif text-3xl md:text-5xl font-medium">Signature Collection</h2>
              <p className="text-muted-foreground text-sm md:text-base">Premium selection of our most exclusive luxury pieces with real photos.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {luxuryProducts.map((product, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn} 
                  initial="initial" 
                  whileInView="animate" 
                  viewport={{ once: true, margin: "50px" }} 
                  transition={{ delay: index % 4 * 0.1 }} 
                  className="group cursor-pointer"
                  data-testid={`product-card-${product.productId}-${index}`}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-white mb-3 md:mb-4 shadow-sm group h-80 sm:h-96">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      loading="lazy"
                      className="w-full h-full object-cover p-2 transition-transform duration-700 md:group-hover:scale-110" 
                    />
                    <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-red-600 text-white text-[8px] md:text-[0.6rem] font-bold px-2 py-1 uppercase tracking-tighter">
                      {product.tag}
                    </div>
                    <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/5 transition-colors duration-300" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[8px] md:text-[0.6rem] uppercase tracking-widest text-muted-foreground">{product.category}</p>
                    <h3 className="font-serif text-lg md:text-xl group-hover:text-red-600 transition-colors leading-tight">{product.name}</h3>
                    <p className="font-bold text-base md:text-lg text-red-600">{formatPrice(product.price)}</p>
                    <p className="text-xs text-gray-500 pt-1">ID: {product.productId}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Factors */}
        <section className="py-12 md:py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
              <div className="space-y-3 md:space-y-4">
                <Truck className="h-8 w-8 md:h-10 md:w-10 mx-auto text-red-600" />
                <h3 className="text-lg md:text-xl font-medium">Pan-Gujarat Delivery</h3>
                <p className="text-gray-400 text-xs md:text-sm">Safe and professional delivery across the state.</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <ShieldCheck className="h-8 w-8 md:h-10 md:w-10 mx-auto text-red-600" />
                <h3 className="text-lg md:text-xl font-medium">Lifetime Support</h3>
                <p className="text-gray-400 text-xs md:text-sm">We stand by our craftsmanship for years to come.</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <Lock className="h-8 w-8 md:h-10 md:w-10 mx-auto text-red-600" />
                <h3 className="text-lg md:text-xl font-medium">Secure Storage</h3>
                <p className="text-gray-400 text-xs md:text-sm">Market leaders in high-security tijori systems.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
