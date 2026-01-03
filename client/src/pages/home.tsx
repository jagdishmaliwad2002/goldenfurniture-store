import { motion } from "framer-motion";
import { ArrowRight, Star, Truck, ShieldCheck, Clock, Lock, Armchair, Briefcase, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar, Footer } from "@/components/layout";

// Assets
import heroImage from "@assets/generated_images/luxury_living_room_with_golden_accents.png";
import productChair from "@assets/generated_images/golden_velvet_armchair.png";
import productTable from "@assets/generated_images/marble_dining_table_gold_legs.png";
import productBed from "@assets/generated_images/luxury_bedroom_interior.png";
import officeChair from "@assets/generated_images/modern_office_chair_luxury.png";
import tijoriSafe from "@assets/generated_images/luxury_steel_tijori_safe.png";
import customSofa from "@assets/generated_images/bespoke_customized_red_sofa.png";
import lockerUnit from "@assets/generated_images/luxury_steel_locker_unit.png";

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
              src={customSofa} 
              alt="Bespoke Red Sofa" 
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
                Since 2010 • Lunawada
              </span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight tracking-tight">
                Crafting <span className="italic font-light text-primary-foreground/90">Comfort</span> <br/>
                & Elegance
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto font-light leading-relaxed">
                Premium furniture tailored to your lifestyle. From bespoke sofas to high-security lockers, 
                discover excellence at Golden Furniture.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 rounded-none px-8 h-14 text-base tracking-wide min-w-[180px]">
                  Shop Collection
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-none px-8 h-14 text-base tracking-wide min-w-[180px]">
                  Explore Bespoke
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-medium">Our Specialized Range</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Providing high-quality solutions for your home and office in Gujarat.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { icon: Armchair, label: "Sofa", img: customSofa },
                { icon: Briefcase, label: "Office", img: officeChair },
                { icon: Lock, label: "Tijori", img: tijoriSafe },
                { icon: LayoutGrid, label: "Lockers", img: lockerUnit },
                { icon: Star, label: "Beds", img: productBed },
                { icon: ArrowRight, label: "Dining", img: productTable },
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer text-center space-y-4">
                  <div className="aspect-square bg-secondary/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 overflow-hidden relative">
                    <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40" />
                    <item.icon className="h-8 w-8 relative z-10" />
                  </div>
                  <h3 className="font-medium uppercase tracking-widest text-sm">{item.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Product Card: Tijori */}
              <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4">
                  <img src={tijoriSafe} alt="Premium Tijori" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[0.6rem] font-bold px-2 py-1 uppercase">High Security</div>
                </div>
                <h3 className="font-serif text-xl">Imperial Steel Tijori</h3>
                <p className="text-muted-foreground text-sm">Advanced Locking System</p>
              </motion.div>

              {/* Product Card: Office Chair */}
              <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.1 }} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4">
                  <img src={officeChair} alt="Executive Chair" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-black text-white text-[0.6rem] font-bold px-2 py-1 uppercase">Executive</div>
                </div>
                <h3 className="font-serif text-xl">Director's Series Chair</h3>
                <p className="text-muted-foreground text-sm">Ergonomic Excellence</p>
              </motion.div>

              {/* Product Card: Red Sofa */}
              <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.2 }} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4">
                  <img src={customSofa} alt="Bespoke Sofa" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[0.6rem] font-bold px-2 py-1 uppercase">Bespoke</div>
                </div>
                <h3 className="font-serif text-xl">Crimson Velvet Sectional</h3>
                <p className="text-muted-foreground text-sm">Customized Dimensions</p>
              </motion.div>

              {/* Product Card: Lockers */}
              <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.3 }} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4">
                  <img src={lockerUnit} alt="Steel Locker" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <h3 className="font-serif text-xl">Industrial Steel Locker</h3>
                <p className="text-muted-foreground text-sm">Durable Storage</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visit Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-medium">Visit Our Showroom</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Experience the quality firsthand. Visit our store in Lunawada, Gujarat, where our designers can help you customize the perfect pieces for your home.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-bold">Operating Hours</p>
                    <p className="text-muted-foreground">Mon - Sat: 9:15 AM - 8:30 PM</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="rounded-none bg-black text-white px-10 h-14">Get Directions</Button>
            </div>
            <div className="h-[400px] bg-secondary/20 relative overflow-hidden">
               <img src={heroImage} alt="Showroom" className="w-full h-full object-cover grayscale opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-8 shadow-2xl border border-border">
                    <h4 className="font-serif text-2xl mb-4">Lunawada Store</h4>
                    <p className="text-muted-foreground">Modasa Road, opposite SBI Bank</p>
                    <p className="text-muted-foreground">Gujarat 389230</p>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
