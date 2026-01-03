import { Link } from "wouter";
import { Search, ShoppingBag, User, Menu, X, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="font-serif text-2xl font-bold text-red-600">
                ગોલ્ડન ફર્નિચર
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              ગોલ્ડન ફર્નિચર - તમારી જીવનશૈલી માટે શ્રેષ્ઠ પસંદગી. Crafting timeless furniture pieces that bring elegance and comfort to your home since 2010. Visit our store in Lunawada, Gujarat.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary hover:bg-transparent -ml-2"><Facebook className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary hover:bg-transparent"><Instagram className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary hover:bg-transparent"><Twitter className="h-4 w-4" /></Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Collections</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Inspiration</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
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

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Newsletter</h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Subscribe to get updates on new collections and exclusive offers.</p>
              <div className="flex gap-2">
                <Input placeholder="Your email address" className="bg-background" />
                <Button size="icon" className="bg-primary shrink-0"><ArrowRight className="h-4 w-4" /></Button>
              </div>
              <p className="text-[0.7rem] text-muted-foreground">info@goldenfurniture.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 Lunawada Furniture. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
