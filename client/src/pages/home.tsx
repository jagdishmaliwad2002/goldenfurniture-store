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
import royalSofa from "@assets/generated_images/royal_gold_velvet_sofa_set.png";
import emeraldSofa from "@assets/generated_images/modern_emerald_velvet_sofa.png";
import bossChair from "@assets/generated_images/executive_leather_boss_chair.png";
import onyxDining from "@assets/generated_images/onyx_marble_dining_table_gold.png";
import royalBed from "@assets/generated_images/modern_royal_bed_gold_inlay.png";
import floatingBed from "@assets/generated_images/minimalist_floating_bed_suite.png";
import velvetBed from "@assets/generated_images/velvet_tufted_designer_bed.png";
import canopyBed from "@assets/generated_images/modern_canopy_bed_brass.png";
import leatherBed from "@assets/generated_images/italian_leather_platform_bed.png";
import ivorySofa from "@assets/generated_images/modern_curved_velvet_sofa_ivory.png";
import blackLeatherSofa from "@assets/generated_images/italian_leather_modular_sofa_black.png";
import sapphireSofa from "@assets/generated_images/luxury_chesterfield_redefined_blue.png";
import scandiSofa from "@assets/generated_images/scandinavian_minimalist_sofa_grey.png";
import bubbleSofa from "@assets/generated_images/avant-garde_bubble_sofa_orange.png";
import suedeSectional from "@assets/generated_images/luxury_l-shaped_suede_sofa_brown.png";
import tuxedoSofa from "@assets/generated_images/modern_tuxedo_sofa_velvet_emerald.png";
import shellSofa from "@assets/generated_images/art_deco_shell_sofa_pink.png";
import theaterSofa from "@assets/generated_images/luxury_reclining_home_theater_sofa.png";
import daybedSofa from "@assets/generated_images/modern_daybed_sofa_gold_frame.png";
import premiumSectional from "@assets/generated_images/modern_grey_sectional_sofa_premium.png";
import blueWardrobe from "@assets/generated_images/luxury_blue_3-door_wardrobe_mirror.png";
import tealTvUnit from "@assets/generated_images/modern_tv_unit_console_teal.png";
import diamondBed from "@assets/generated_images/luxury_cream_diamond_tufted_bed.png";
import taupeTijori from "@assets/generated_images/luxury_taupe_3-door_tijori_wardrobe.png";
import butterflyBed from "@assets/generated_images/modern_indian_butterfly_art_bed.png";
import floralBed from "@assets/generated_images/contemporary_floral_indian_bed_design.png";
import studentLocker from "@assets/generated_images/modern_school_student_locker_unit.png";
import staffLocker from "@assets/generated_images/premium_office_staff_locker_system.png";
import marbleTvUnit from "@assets/generated_images/modern_marble_led_tv_unit.png";
import teakTvUnitDisplay from "@assets/generated_images/teak_ribbed_led_tv_console.png";
import glassMediaCenter from "@assets/generated_images/contemporary_glass_led_media_center.png";
import teakGlassDining from "@assets/generated_images/modern_glass_top_teak_dining_table.png";
import walnutGlassDining from "@assets/generated_images/contemporary_walnut_glass_dining_set.png";
import oakGlassDining from "@assets/generated_images/minimalist_oak_glass_dining_table.png";
import blueTijori from "@assets/generated_images/elite_blue_deluxe_tijori_wardrobe.png";
import fiveDoorTijori from "@assets/generated_images/modern_5-door_dressing_tijori_suite.png";
import sideDressingTijori from "@assets/generated_images/side_dressing_professional_cupboard.png";
import diamondChair from "@assets/generated_images/executive_diamond_stitched_office_chair.png";
import walnutChair from "@assets/generated_images/imperial_walnut_leather_executive_chair.png";
import vaticanChair from "@assets/generated_images/vatican_tan_leather_throne_chair.png";
import terracottaChair from "@assets/generated_images/royal_terracotta_ergonomic_office_chair.png";
import shoeCabinet from "@assets/generated_images/bespoke_walnut_shoe_storage_cabinet.png";
import kidsStudySet from "@assets/generated_images/kids_sky_blue_study_set.png";
import cafeChairs from "@assets/generated_images/designer_plastic_cafe_chairs_set.png";
import royalArmchairs from "@assets/generated_images/royal_high-back_armchair_collection.png";
import executiveDesk from "@assets/generated_images/elite_walnut_professional_executive_desk.png";
import waitingBench from "@assets/generated_images/professional_3-seater_airport_waiting_bench.png";
import dualShoeCabinet from "@assets/generated_images/dual-mode_walnut_shoe_cabinet_display.png";
import walnutMediaSuite from "@assets/generated_images/modern_walnut_led_media_suite.png";
import scandiTvUnit from "@assets/generated_images/scandinavian_oak_led_tv_unit.png";
import libernovoGaming from "@assets/generated_images/libernovo_pro_gaming_throne.png";
import codingChair from "@assets/generated_images/zenith_coding_ergonomic_chair.png";
import engineerChair from "@assets/generated_images/titan_engineer_heavy-duty_chair.png";
import libernovoStealth from "@assets/generated_images/libernovo_elite_stealth_gaming_chair.png";
import cyberNexusChair from "@assets/generated_images/cyber-nexus_engineering_suite_seat.png";
import standingDesk from "@assets/generated_images/dual-motor_electric_sit-stand_desk.png";
import wfhDesk from "@assets/generated_images/zenith_minimalist_work-from-home_desk.png";
import foldingDesk from "@assets/generated_images/compact_foldable_home_office_desk.png";
import glassDesk from "@assets/generated_images/lumina_glass_top_executive_work_desk.png";
import floatingDesk from "@assets/generated_images/bespoke_walnut_floating_workspace_desk.png";

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

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

const luxuryProducts = [
  {
    name: "Royal Gold Velvet Sofa Set",
    price: 45000,
    category: "Sofa",
    img: royalSofa,
    tag: "Royal"
  },
  {
    name: "Emerald Curve Sectional",
    price: 42500,
    category: "Sofa",
    img: emeraldSofa,
    tag: "Modern"
  },
  {
    name: "Executive Boss Series VII",
    price: 14800,
    category: "Office",
    img: bossChair,
    tag: "Premium"
  },
  {
    name: "Onyx Gold Dining Ensemble",
    price: 34500,
    category: "Dining",
    img: onyxDining,
    tag: "Exclusive"
  },
  {
    name: "Crimson Velvet Sofa",
    price: 43800,
    category: "Sofa",
    img: customSofa,
    tag: "Bespoke"
  },
  {
    name: "Imperial Steel Tijori",
    price: 29500,
    category: "Security",
    img: tijoriSafe,
    tag: "High Security"
  },
  {
    name: "Carrara Gold Dining Table",
    price: 33900,
    category: "Dining",
    img: productTable,
    tag: "Luxury"
  },
  {
    name: "Director's Series Chair",
    price: 12500,
    category: "Office",
    img: officeChair,
    tag: "Executive"
  },
  {
    name: "Royal Gold Inlay Bed",
    price: 34800,
    category: "Bedroom",
    img: royalBed,
    tag: "Master"
  },
  {
    name: "Zenith Floating Suite",
    price: 31500,
    category: "Bedroom",
    img: floatingBed,
    tag: "Modern"
  },
  {
    name: "Midnight Velvet Grandeur",
    price: 35000,
    category: "Bedroom",
    img: velvetBed,
    tag: "Designer"
  },
  {
    name: "Celestial Brass Canopy",
    price: 34200,
    category: "Bedroom",
    img: canopyBed,
    tag: "Luxury"
  },
  {
    name: "Milano Leather Platform",
    price: 32800,
    category: "Bedroom",
    img: leatherBed,
    tag: "Italian"
  },
  {
    name: "Ivory Serpentine Curve",
    price: 44500,
    category: "Sofa",
    img: ivorySofa,
    tag: "Modern"
  },
  {
    name: "Vogue Modular Leather",
    price: 45000,
    category: "Sofa",
    img: blackLeatherSofa,
    tag: "Italian"
  },
  {
    name: "Sapphire Grand Chesterfield",
    price: 43500,
    category: "Sofa",
    img: sapphireSofa,
    tag: "Luxury"
  },
  {
    name: "Nordic Oak Minimalist",
    price: 38500,
    category: "Sofa",
    img: scandiSofa,
    tag: "Scandi"
  },
  {
    name: "Avant-Garde Bubble Seat",
    price: 44800,
    category: "Sofa",
    img: bubbleSofa,
    tag: "Unique"
  },
  {
    name: "Chocolate Suede Sectional",
    price: 45000,
    category: "Sofa",
    img: suedeSectional,
    tag: "L-Shape"
  },
  {
    name: "Emerald Tuxedo Series",
    price: 42200,
    category: "Sofa",
    img: tuxedoSofa,
    tag: "Hotel Luxe"
  },
  {
    name: "Blush Shell Designer",
    price: 39500,
    category: "Sofa",
    img: shellSofa,
    tag: "Art Deco"
  },
  {
    name: "Cine-Luxe 4-Seater Theater",
    price: 45000,
    category: "Sofa",
    img: theaterSofa,
    tag: "Home Cinema"
  },
  {
    name: "Solaris Gold Daybed",
    price: 41800,
    category: "Sofa",
    img: daybedSofa,
    tag: "Minimalist"
  },
  {
    name: "Golden Comfort Sectional",
    price: 44200,
    category: "Sofa",
    img: premiumSectional,
    tag: "Signature"
  },
  {
    name: "Imperial Blue Almirah",
    price: 29800,
    category: "Bedroom",
    img: blueWardrobe,
    tag: "New Arrival"
  },
  {
    name: "Arcade Media Console",
    price: 23500,
    category: "Living",
    img: tealTvUnit,
    tag: "Modern"
  },
  {
    name: "Diamond Wing Master Bed",
    price: 35000,
    category: "Bedroom",
    img: diamondBed,
    tag: "Ultra Luxe"
  },
  {
    name: "Heritage Taupe Tijori",
    price: 28500,
    category: "Storage",
    img: taupeTijori,
    tag: "Secure"
  },
  {
    name: "Butterfly Art Master Suite",
    price: 33800,
    category: "Bedroom",
    img: butterflyBed,
    tag: "Artistic"
  },
  {
    name: "Royal Floral Teak Bed",
    price: 35000,
    category: "Bedroom",
    img: floralBed,
    tag: "Classic"
  },
  {
    name: "Academic 15-Door Locker",
    price: 27500,
    category: "Storage",
    img: studentLocker,
    tag: "School"
  },
  {
    name: "Elite Office Staff Unit",
    price: 24800,
    category: "Storage",
    img: staffLocker,
    tag: "Corporate"
  },
  {
    name: "Marble Aura LED Wall",
    price: 24500,
    category: "Living",
    img: marbleTvUnit,
    tag: "Luxury"
  },
  {
    name: "Teak Ribbed Grand Console",
    price: 27200,
    category: "Living",
    img: teakTvUnitDisplay,
    tag: "Bespoke"
  },
  {
    name: "Lumina Glass Media Suite",
    price: 22800,
    category: "Living",
    img: glassMediaCenter,
    tag: "Modern"
  },
  {
    name: "Teak Crystal Dining Set",
    price: 34500,
    category: "Dining",
    img: teakGlassDining,
    tag: "Modern"
  },
  {
    name: "Walnut Horizon Dining",
    price: 35000,
    category: "Dining",
    img: walnutGlassDining,
    tag: "Luxury"
  },
  {
    name: "Nordic Glass Dining",
    price: 31800,
    category: "Dining",
    img: oakGlassDining,
    tag: "Minimalist"
  },
  {
    name: "Elite Blue Deluxe Tijori",
    price: 29200,
    category: "Storage",
    img: blueTijori,
    tag: "Security"
  },
  {
    name: "Grand 5-Door Dressing Suite",
    price: 29800,
    category: "Storage",
    img: fiveDoorTijori,
    tag: "Premium"
  },
  {
    name: "Professional Side Dressing Unit",
    price: 27500,
    category: "Storage",
    img: sideDressingTijori,
    tag: "Versatile"
  },
  {
    name: "Diamond Executive Throne",
    price: 14200,
    category: "Office",
    img: diamondChair,
    tag: "Ergonomic"
  },
  {
    name: "Imperial Walnut Manager Chair",
    price: 14800,
    category: "Office",
    img: walnutChair,
    tag: "Premium"
  },
  {
    name: "Vatican Tan Sovereign",
    price: 15000,
    category: "Office",
    img: vaticanChair,
    tag: "Luxury"
  },
  {
    name: "Royal Terracotta Task Chair",
    price: 11800,
    category: "Office",
    img: terracottaChair,
    tag: "Modern"
  },
  {
    name: "Bespoke Walnut Shoescase",
    price: 24500,
    category: "Storage",
    img: shoeCabinet,
    tag: "Essential"
  },
  {
    name: "Junior Sky Activity Set",
    price: 4500,
    category: "Kids",
    img: kidsStudySet,
    tag: "Playful"
  },
  {
    name: "Vivid Palette Cafe Trio",
    price: 2800,
    category: "Seating",
    img: cafeChairs,
    tag: "Modern"
  },
  {
    name: "Royal Woven High-Back",
    price: 3200,
    category: "Seating",
    img: royalArmchairs,
    tag: "Comfort"
  },
  {
    name: "Elite Walnut Office Table",
    price: 24800,
    category: "Office",
    img: executiveDesk,
    tag: "Professional"
  },
  {
    name: "Terminal Cobalt 3-Seater",
    price: 11500,
    category: "Office",
    img: waitingBench,
    tag: "Commercial"
  },
  {
    name: "Zenith Dual Shoe Suite",
    price: 22200,
    category: "Storage",
    img: dualShoeCabinet,
    tag: "Minimalist"
  },
  {
    name: "Walnut Horizon Media Suite",
    price: 27800,
    category: "Living",
    img: walnutMediaSuite,
    tag: "Premium"
  },
  {
    name: "Nordic Slatted TV Wall",
    price: 24800,
    category: "Living",
    img: scandiTvUnit,
    tag: "Modern"
  },
  {
    name: "Libernovo Pro Gaming Throne",
    price: 14500,
    category: "Office",
    img: libernovoGaming,
    tag: "Gaming"
  },
  {
    name: "Zenith Coding Ergonomic Chair",
    price: 13800,
    category: "Office",
    img: codingChair,
    tag: "Coding"
  },
  {
    name: "Titan Engineer Heavy-Duty",
    price: 14200,
    category: "Office",
    img: engineerChair,
    tag: "Engineering"
  },
  {
    name: "Libernovo Elite Stealth",
    price: 14800,
    category: "Office",
    img: libernovoStealth,
    tag: "Pro Gaming"
  },
  {
    name: "Cyber-Nexus Suite Seat",
    price: 13500,
    category: "Office",
    img: cyberNexusChair,
    tag: "Tech"
  },
  {
    name: "Aura Electric Sit-Stand Desk",
    price: 24500,
    category: "Office",
    img: standingDesk,
    tag: "Adjustable"
  },
  {
    name: "Zenith Minimalist WFH Desk",
    price: 17800,
    category: "Office",
    img: wfhDesk,
    tag: "Essential"
  },
  {
    name: "Space-Saver Foldable Desk",
    price: 11800,
    category: "Office",
    img: foldingDesk,
    tag: "Compact"
  },
  {
    name: "Lumina Smoked Glass Desk",
    price: 24900,
    category: "Office",
    img: glassDesk,
    tag: "Luxury"
  },
  {
    name: "Walnut Floating Workspace",
    price: 21500,
    category: "Office",
    img: floatingDesk,
    tag: "Modern"
  },
];

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
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-medium">Signature Collection</h2>
              <p className="text-muted-foreground">Premium selection of our most exclusive luxury pieces.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {luxuryProducts.map((product, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn} 
                  initial="initial" 
                  whileInView="animate" 
                  viewport={{ once: true }} 
                  transition={{ delay: index * 0.1 }} 
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4 shadow-sm group">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-[0.6rem] font-bold px-2 py-1 uppercase tracking-tighter">
                      {product.tag}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    <Button className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white text-black hover:bg-white/90 min-w-[140px] shadow-lg rounded-none text-xs uppercase tracking-widest">
                      View Details
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[0.6rem] uppercase tracking-widest text-muted-foreground">{product.category}</p>
                    <h3 className="font-serif text-xl group-hover:text-red-600 transition-colors leading-tight">{product.name}</h3>
                    <p className="font-bold text-lg text-red-600">{formatPrice(product.price)}</p>
                  </div>
                </motion.div>
              ))}
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
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">Address</h4>
                    <p className="text-muted-foreground text-sm">Lunawada, Gujarat, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">Hours</h4>
                    <p className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 rounded-none px-8 h-14 mt-6">
                Get Directions
              </Button>
            </div>
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-none shadow-2xl">
              <img 
                src={heroImage} 
                alt="Showroom" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Trust Factors */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <Truck className="h-10 w-10 mx-auto text-red-600" />
                <h3 className="text-xl font-medium">Pan-Gujarat Delivery</h3>
                <p className="text-gray-400 text-sm">Safe and professional delivery across the state.</p>
              </div>
              <div className="space-y-4">
                <ShieldCheck className="h-10 w-10 mx-auto text-red-600" />
                <h3 className="text-xl font-medium">Lifetime Support</h3>
                <p className="text-gray-400 text-sm">We stand by our craftsmanship for years to come.</p>
              </div>
              <div className="space-y-4">
                <Lock className="h-10 w-10 mx-auto text-red-600" />
                <h3 className="text-xl font-medium">Secure Storage</h3>
                <p className="text-gray-400 text-sm">Market leaders in high-security tijori systems.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
