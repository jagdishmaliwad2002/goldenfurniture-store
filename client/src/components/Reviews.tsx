import { Star, Plus, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const INITIAL_REVIEWS = [
  {
    name: "Rahul Panchal",
    date: "2 days ago",
    text: "Bought a premium sofa set recently. The quality and finish are just amazing. Highly recommend Golden Furniture for best designs!",
    rating: 5,
  },
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
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 5 });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    
    const reviewToAdd = {
      ...newReview,
      date: "Just now",
    };
    
    // Add to the beginning of the array so it shows first (latest to oldest)
    setReviews([reviewToAdd, ...reviews]);
    setIsModalOpen(false);
    setNewReview({ name: "", text: "", rating: 5 });
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
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
        <div className="text-muted-foreground text-sm font-medium mb-6">
          Based on verified Google Reviews
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-medium text-sm"
        >
          <Plus className="w-4 h-4" /> Write a Review
        </button>
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
              duration: Math.max(40, reviews.length * 10), // Adjust speed based on number of reviews
              repeat: Infinity 
            }}
          >
            {/* Repeat the array enough times to ensure seamless infinite scroll */}
            {[...reviews, ...reviews, ...reviews, ...reviews].map((review, idx) => (
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

      {/* Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-md relative"
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="font-serif text-2xl font-medium mb-6">Write a Review</h3>
            
            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({...newReview, rating: star})}
                      className={`${newReview.rating >= star ? 'text-yellow-400' : 'text-gray-300'} hover:scale-110 transition-transform`}
                    >
                      <Star className="w-8 h-8 fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                <textarea 
                  required
                  value={newReview.text}
                  onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none h-32 resize-none"
                  placeholder="Share your experience..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors mt-6"
              >
                Submit Review
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}
