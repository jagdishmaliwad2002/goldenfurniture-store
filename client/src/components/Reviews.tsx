import { Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Ravi Patel",
    date: "1 month ago",
    text: "Excellent furniture quality and very reasonable prices compared to other shops in Lunawada. Bought a sofa set and it's perfect.",
    rating: 5,
  },
  {
    name: "Sanjay Shah",
    date: "2 months ago",
    text: "Very good collection of modern beds and wardrobes. The delivery was fast and safe. Highly recommended for home furniture.",
    rating: 5,
  },
  {
    name: "Meena Desai",
    date: "3 weeks ago",
    text: "Best furniture shop in Mahisagar. Staff is very helpful and they have latest designs. Bought dining table and it looks premium.",
    rating: 5,
  },
  {
    name: "Kiran Parmar",
    date: "2 months ago",
    text: "Purchased office chairs and desk. Quality is top notch and they gave good discount. Must visit Golden Furniture.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    date: "1 week ago",
    text: "Great experience. Golden furniture has the best almirah and tijori collection in the entire district.",
    rating: 5,
  }
];

export function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const scroll = () => {
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += 1;
        }
      };
      
      const intervalId = setInterval(scroll, 30);
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4">Customer Reviews</h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xl font-bold">4.9</span>
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-current" />
            ))}
          </div>
        </div>
        <a 
          href="https://maps.app.goo.gl/Uyu4WFYAC6FGDfbc6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-700 font-medium hover:underline inline-flex items-center gap-2"
        >
          View all reviews on Google Maps
        </a>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden gap-6 px-4 md:px-24 pb-8 pt-4 w-full"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Double the reviews array to create infinite loop effect */}
          {[...REVIEWS, ...REVIEWS].map((review, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="flex-none w-[300px] md:w-[400px] bg-secondary/10 p-6 md:p-8 rounded-xl shadow-sm border border-secondary/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-auto">{review.date}</span>
              </div>
              <p className="text-sm md:text-base text-foreground leading-relaxed mb-4 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-sm">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
