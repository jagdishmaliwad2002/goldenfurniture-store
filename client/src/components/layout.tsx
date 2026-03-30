import { Link } from "wouter";
import { Search, ShoppingBag, User, Menu, X, Phone, MapPin, Facebook, Instagram, Twitter, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import logoImage from "@assets/generated_images/3d_red_gujarati_furniture_logo.png";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-ml-2">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="text-xl font-serif font-bold">Home</Link>
                <Link href="/shop" className="text-xl font-serif font-bold">Shop</Link>
                <Link href="/collections" className="text-xl font-serif font-bold">Collections</Link>
                <Link href="/about" className="text-xl font-serif font-bold">About Us</Link>
                <Link href="/contact" className="text-xl font-serif font-bold">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-red-600 group-hover:text-red-700 transition-colors">
            ગોલ્ડન ફર્નિચર
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide">Home</Link>
          <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide">Shop</Link>
          <Link href="/collections" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide">Collections</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide">About</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className={`hidden md:flex items-center transition-all duration-300 ${isSearchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
            <Input 
              type="search" 
              placeholder="Search furniture..." 
              className="h-9 bg-secondary/50 border-transparent focus:border-primary/20"
            />
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="hover:text-primary hover:bg-transparent"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-transparent hidden sm:flex">
            <User className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="relative hover:text-primary hover:bg-transparent">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary animate-pulse" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="font-serif text-2xl font-bold text-red-600">
                Golden Furniture Lunawada
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              ગોલ્ડન ફર્નિચર - તમારી જીવનશૈલી માટે શ્રેષ્ઠ પસંદગી. The best furniture shop in Lunawada Mahisagar, offering reasonable and modern furniture including sofa sets, beds, wardrobes, dining tables, and home furniture at affordable prices.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary hover:bg-transparent -ml-2"><Facebook className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary hover:bg-transparent"><Instagram className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary hover:bg-transparent"><Twitter className="h-4 w-4" /></Button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Modasa Road, opposite SBI Bank,<br />Lunawada, Gujarat 389230</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 97372 17844</span>
              </li>
              <li className="flex items-center gap-3 pl-8">
                <span>+91 98253 77067</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>Closed ⋅ Opens 9:15 am Mon</span>
              </li>
            </ul>
          </div>

          {/* Location Map */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Our Location</h4>
            <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden border border-border shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.097774236427!2d73.60278247415052!3d23.132243412228803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3960ae52fa8090a7%3A0x751379344ad8b704!2sGOLDEN%20FURNITURE.!5e1!3m2!1sen!2sin!4v1774846600224!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 Golden Furniture Lunawada. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground">Terms</Link>
              <Link href="#" className="hover:text-foreground">Privacy</Link>
              <Link href="#" className="hover:text-foreground">Cookies</Link>
            </div>
            <a 
              href="https://wa.me/917778988826" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Design developed by Mahisagarsoft
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
