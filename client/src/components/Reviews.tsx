import { Star } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Amit Patel",
    date: "1 week ago",
    text: "Great experience. Golden furniture has the best almirah and tijori collection in the entire district.",
    rating: 5,
  },
  {
    name: "Meena Desai",
    date: "3 weeks ago",
    text: "Best furniture shop in Mahisagar. Staff is very helpful and they have latest designs. Bought dining table and it looks premium.",
    rating: 5,
  },
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
    name: "Kiran Parmar",
    date: "2 months ago",
    text: "Purchased office chairs and desk. Quality is top notch and they gave good discount. Must visit Golden Furniture.",
    rating: 5,
  }
];

export function CustomerReviews() {
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
        <div className="text-muted-foreground text-sm font-medium">
          Based on verified Google Reviews
        </div>
      </div>

      <div className="relative w-full max-w-[100vw] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex overflow-hidden" style={{ direction: 'ltr' }}>
          <motion.div 
            className="flex gap-6 py-4 px-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 100, // Very slow motion for better readability
              repeat: Infinity 
            }}
          >
            {[...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, idx) => (
              <div 
                key={idx}
                className="flex-none w-[300px] md:w-[400px] bg-secondary/10 p-6 md:p-8 rounded-xl shadow-sm border border-secondary/20 hover:border-secondary/40 transition-colors"
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
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
