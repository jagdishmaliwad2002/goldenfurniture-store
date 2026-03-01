import { motion } from "framer-motion";
import { ArrowRight, Star, Truck, ShieldCheck, Clock, Lock, Armchair, Briefcase, LayoutGrid, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar, Footer } from "@/components/layout";
import { useState } from "react";

// Assets with lazy loading logic or optimized imports if possible
// Note: In Vite, these are handled as static assets. 
// For "Fast Loading", we'll ensure <img> tags use loading="lazy" and fetchpriority="high" for hero.

import heroImage from "@assets/generated_images/luxury_living_room_with_golden_accents.png";
import productChair from "@assets/WhatsApp_Image_2026-02-27_at_12.05.31_PM_1772341101012.jpeg";
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
import blueWardrobe from "@assets/WhatsApp_Image_2026-02-27_at_12.05.03_PM_(1)_1772341105755.jpeg";
import tealTvUnit from "@assets/generated_images/modern_tv_unit_console_teal.png";
import diamondBed from "@assets/generated_images/luxury_cream_diamond_tufted_bed.png";
import taupeTijori from "@assets/WhatsApp_Image_2026-02-27_at_12.02.31_PM_1772341123779.jpeg";
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
import blueTijori from "@assets/WhatsApp_Image_2026-02-27_at_12.05.02_PM_(1)_1772341113527.jpeg";
import fiveDoorTijori from "@assets/WhatsApp_Image_2026-02-27_at_12.05.01_PM_(1)_1772341127419.jpeg";
import sideDressingTijori from "@assets/WhatsApp_Image_2026-02-27_at_12.05.02_PM_(2)_1772341110619.jpeg";
import diamondChair from "@assets/WhatsApp_Image_2026-02-27_at_12.05.31_PM_1772341101012.jpeg";
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
    price: 28500,
    category: "Sofa",
    img: royalSofa,
    tag: "Royal"
  },
  {
    name: "Emerald Curve Sectional",
    price: 24200,
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
    price: 29500,
    category: "Dining",
    img: onyxDining,
    tag: "Exclusive"
  },
  {
    name: "Crimson Velvet Sofa",
    price: 26800,
    category: "Sofa",
    img: customSofa,
    tag: "Bespoke"
  },
  {
    name: "Imperial Steel Tijori",
    price: 18500,
    category: "Security",
    img: tijoriSafe,
    tag: "High Security"
  },
  {
    name: "Carrara Gold Dining Table",
    price: 27900,
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
    price: 29800,
    category: "Bedroom",
    img: royalBed,
    tag: "Master"
  },
  {
    name: "Zenith Floating Suite",
    price: 25500,
    category: "Bedroom",
    img: floatingBed,
    tag: "Modern"
  },
  {
    name: "Midnight Velvet Grandeur",
    price: 28900,
    category: "Bedroom",
    img: velvetBed,
    tag: "Designer"
  },
  {
    name: "Celestial Brass Canopy",
    price: 27200,
    category: "Bedroom",
    img: canopyBed,
    tag: "Luxury"
  },
  {
    name: "Milano Leather Platform",
    price: 24800,
    category: "Bedroom",
    img: leatherBed,
    tag: "Italian"
  },
  {
    name: "Ivory Serpentine Curve",
    price: 26500,
    category: "Sofa",
    img: ivorySofa,
    tag: "Modern"
  },
  {
    name: "Vogue Modular Leather",
    price: 29000,
    category: "Sofa",
    img: blackLeatherSofa,
    tag: "Italian"
  },
  {
    name: "Sapphire Grand Chesterfield",
    price: 27500,
    category: "Sofa",
    img: sapphireSofa,
    tag: "Luxury"
  },
  {
    name: "Nordic Oak Minimalist",
    price: 21500,
    category: "Sofa",
    img: scandiSofa,
    tag: "Scandi"
  },
  {
    name: "Avant-Garde Bubble Seat",
    price: 28800,
    category: "Sofa",
    img: bubbleSofa,
    tag: "Unique"
  },
  {
    name: "Chocolate Suede Sectional",
    price: 29500,
    category: "Sofa",
    img: suedeSectional,
    tag: "L-Shape"
  },
  {
    name: "Emerald Tuxedo Series",
    price: 24200,
    category: "Sofa",
    img: tuxedoSofa,
    tag: "Hotel Luxe"
  },
  {
    name: "Blush Shell Designer",
    price: 22500,
    category: "Sofa",
    img: shellSofa,
    tag: "Art Deco"
  },
  {
    name: "Cine-Luxe 4-Seater Theater",
    price: 30000,
    category: "Sofa",
    img: theaterSofa,
    tag: "Home Cinema"
  },
  {
    name: "Solaris Gold Daybed",
    price: 21800,
    category: "Sofa",
    img: daybedSofa,
    tag: "Minimalist"
  },
  {
    name: "Golden Comfort Sectional",
    price: 28200,
    category: "Sofa",
    img: premiumSectional,
    tag: "Signature"
  },
  {
    name: "Imperial Blue Almirah",
    price: 24800,
    category: "Bedroom",
    img: blueWardrobe,
    tag: "New Arrival"
  },
  {
    name: "Arcade Media Console",
    price: 18500,
    category: "Living",
    img: tealTvUnit,
    tag: "Modern"
  },
  {
    name: "Diamond Wing Master Bed",
    price: 29000,
    category: "Bedroom",
    img: diamondBed,
    tag: "Ultra Luxe"
  },
  {
    name: "Heritage Taupe Tijori",
    price: 22500,
    category: "Storage",
    img: taupeTijori,
    tag: "Secure"
  },
  {
    name: "Butterfly Art Master Suite",
    price: 26800,
    category: "Bedroom",
    img: butterflyBed,
    tag: "Artistic"
  },
  {
    name: "Royal Floral Teak Bed",
    price: 21500,
    category: "Bedroom",
    img: floralBed,
    tag: "Classic"
  },
  {
    name: "Academic 15-Door Locker",
    price: 19500,
    category: "Storage",
    img: studentLocker,
    tag: "School"
  },
  {
    name: "Elite Office Staff Unit",
    price: 17800,
    category: "Storage",
    img: staffLocker,
    tag: "Corporate"
  },
  {
    name: "Marble Aura LED Wall",
    price: 22500,
    category: "Living",
    img: marbleTvUnit,
    tag: "Luxury"
  },
  {
    name: "Teak Ribbed Grand Console",
    price: 21200,
    category: "Living",
    img: teakTvUnitDisplay,
    tag: "Bespoke"
  },
  {
    name: "Lumina Glass Media Suite",
    price: 19800,
    category: "Living",
    img: glassMediaCenter,
    tag: "Modern"
  },
  {
    name: "Teak Crystal Dining Set",
    price: 28500,
    category: "Dining",
    img: teakGlassDining,
    tag: "Modern"
  },
  {
    name: "Walnut Horizon Dining",
    price: 29000,
    category: "Dining",
    img: walnutGlassDining,
    tag: "Luxury"
  },
  {
    name: "Nordic Glass Dining",
    price: 25800,
    category: "Dining",
    img: oakGlassDining,
    tag: "Minimalist"
  },
  {
    name: "Elite Blue Deluxe Tijori",
    price: 23200,
    category: "Storage",
    img: blueTijori,
    tag: "Security"
  },
  {
    name: "Grand 5-Door Dressing Suite",
    price: 27800,
    category: "Storage",
    img: fiveDoorTijori,
    tag: "Premium"
  },
  {
    name: "Professional Side Dressing Unit",
    price: 24500,
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
    price: 13800,
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
    price: 18500,
    category: "Storage",
    img: shoeCabinet,
    tag: "Essential"
  },
  {
    name: "Junior Sky Activity Set",
    price: 10500,
    category: "Kids",
    img: kidsStudySet,
    tag: "Playful"
  },
  {
    name: "Vivid Palette Cafe Trio",
    price: 12800,
    category: "Seating",
    img: cafeChairs,
    tag: "Modern"
  },
  {
    name: "Royal Woven High-Back",
    price: 13200,
    category: "Seating",
    img: royalArmchairs,
    tag: "Comfort"
  },
  {
    name: "Elite Walnut Office Table",
    price: 22800,
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
    price: 16200,
    category: "Storage",
    img: dualShoeCabinet,
    tag: "Minimalist"
  },
  {
    name: "Walnut Horizon Media Suite",
    price: 21800,
    category: "Living",
    img: walnutMediaSuite,
    tag: "Premium"
  },
  {
    name: "Nordic Slatted TV Wall",
    price: 19800,
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
    price: 22900,
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section - Optimized for Desktop & Mobile */}
        <section className="relative h-[80vh] md:h-[90vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={customSofa} 
              alt="Bespoke Red Sofa" 
              fetchPriority="high"
              className="w-full h-full object-cover brightness-[0.85]"
              style={{ objectPosition: 'center 30%' }}
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
                Premium furniture tailored to your lifestyle. From bespoke sofas to high-security lockers, 
                discover excellence at Golden Furniture.
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

        {/* Categories Section - Responsive Grid */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
              <h2 className="font-serif text-3xl md:text-5xl font-medium">Our Specialized Range</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">Providing high-quality solutions for your home and office in Gujarat.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { icon: Armchair, label: "Sofa", img: customSofa },
                { icon: Briefcase, label: "Office", img: officeChair },
                { icon: Lock, label: "Tijori", img: tijoriSafe },
                { icon: LayoutGrid, label: "Lockers", img: lockerUnit },
                { icon: Star, label: "Beds", img: productBed },
                { icon: ArrowRight, label: "Dining", img: productTable },
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

        {/* Featured Products - Mobile First Grid */}
        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
              <h2 className="font-serif text-3xl md:text-5xl font-medium">Signature Collection</h2>
              <p className="text-muted-foreground text-sm md:text-base">Premium selection of our most exclusive luxury pieces.</p>
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
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-white mb-3 md:mb-4 shadow-sm group">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      loading="lazy"
                      className="w-full h-full object-contain p-2 transition-transform duration-700 md:group-hover:scale-110" 
                    />
                    <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-red-600 text-white text-[8px] md:text-[0.6rem] font-bold px-2 py-1 uppercase tracking-tighter">
                      {product.tag}
                    </div>
                    <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/5 transition-colors duration-300" />
                    <Button className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white text-black hover:bg-white/90 min-w-[140px] shadow-lg rounded-none text-xs uppercase tracking-widest">
                      View Details
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[8px] md:text-[0.6rem] uppercase tracking-widest text-muted-foreground">{product.category}</p>
                    <h3 className="font-serif text-lg md:text-xl group-hover:text-red-600 transition-colors leading-tight">{product.name}</h3>
                    <p className="font-bold text-base md:text-lg text-red-600">{formatPrice(product.price)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit Section - Responsive Layout */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <h2 className="font-serif text-3xl md:text-5xl font-medium">Visit Our Showroom</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Experience the quality firsthand. Visit our store in Lunawada, Gujarat, where our designers can help you customize the perfect pieces for your home.
              </p>
              <div className="space-y-4 pt-4 text-left max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs md:text-sm uppercase tracking-wider">Address</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">Lunawada, Gujarat, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs md:text-sm uppercase tracking-wider">Hours</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto bg-red-600 text-white hover:bg-red-700 rounded-none px-8 h-12 md:h-14 mt-6">
                Get Directions
              </Button>
            </div>
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-none shadow-2xl order-first lg:order-last">
              <img 
                src={heroImage} 
                alt="Showroom" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Trust Factors - Stacked on Mobile */}
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
