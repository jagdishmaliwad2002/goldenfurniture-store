import { Star, Plus, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const INITIAL_REVIEWS = [
  {
    name: "UMAR BK",
    date: "3 days ago",
    text: "One of the best furniture store in mahisagar district.good quality products and reasonable price.",
    rating: 5,
  },
  {
    name: "Baria Kiritbhai",
    date: "1 week ago",
    text: "The best place to purchase home and office needs of furniture, price is also reasonable visit to golden furniture lunawada",
    rating: 5,
  },
  {
    name: "Kamlesh Pateliya",
    date: "2 weeks ago",
    text: "Good",
    rating: 5,
  },
  {
    name: "Panchal Rameshbhai",
    date: "2 weeks ago",
    text: "Good products.",
    rating: 5,
  },
  {
    name: "Abdullah Rasid",
    date: "2 months ago",
    text: "Best place to buy furniture in lunawada. Best collection",
    rating: 5,
  },
  {
    name: "Salauddin Shekh",
    date: "2 months ago",
    text: "Good quality product best price",
    rating: 5,
  },
  {
    name: "Bakrawala Abubakr",
    date: "3 months ago",
    text: "Golden furniture is the best furniture shop in mahisagar all most 15 years furniture experience and all item very high quality and best price",
    rating: 5,
  },
  {
    name: "jagdish maliwad",
    date: "5 months ago",
    text: "I recently purchased an ergonomic chair with neck, back, and arm support from Golden Furniture, Lunawada. The quality of the chair is excellent, very comfortable, and perfect for long hours of sitting.",
    rating: 5,
  },
  {
    name: "bharat patel",
    date: "1 year ago",
    text: "Very good sofa com bed fantastic quality in material",
    rating: 5,
  },
  {
    name: "Amir Bakrawala",
    date: "1 year ago",
    text: "This place is great! Amazing selection and good quality products. Everyone was super kind, friendly and knowledgeable! I will be recommending golden furniture in the future to anyone looking for good quality furniture in a stress free environment.",
    rating: 5,
  },
  {
    name: "Murtaza Sukhsarwala",
    date: "1 year ago",
    text: "Best quality furniture in affordable price",
    rating: 5,
  },
  {
    name: "Jafar Surti",
    date: "1 year ago",
    text: "Good quality,best furniture in town.",
    rating: 5,
  },
  {
    name: "Abubakr Bakrawala",
    date: "1 year ago",
    text: "Top level furniture items 15 years old shop",
    rating: 5,
  },
  {
    name: "piyush panchal",
    date: "1 year ago",
    text: "best quality with best price",
    rating: 5,
  },
  {
    name: "millan patel",
    date: "1 year ago",
    text: "Best Quality Work, Best Experience",
    rating: 5,
  },
  {
    name: "Faizal Khan",
    date: "2 years ago",
    text: "The best place to purchase your household needs of furniture. The price is also reasonable and the quality of the product is also perfect.",
    rating: 5,
  },
  {
    name: "Umar Bk",
    date: "2 years ago",
    text: "Best furniture shop in lunawada , beautiful design different colour combination at this place.",
    rating: 5,
  },
  {
    name: "Qasim Vadla",
    date: "2 years ago",
    text: "It is good to visit , within this area they have good verity of furniture..trusted and good behaviour respective people...",
    rating: 5,
  },
  {
    name: "Vaibhavi Vankar",
    date: "2 years ago",
    text: "Good furniture and so many options available",
    rating: 5,
  },
  {
    name: "Ajay Patel",
    date: "3 years ago",
    text: "Beautiful design cool Color combination at this place if you’re looking for better furniture once visit the showroom you will get modern design furniture",
    rating: 5,
  },
  {
    name: "Dr.Sunil Valand",
    date: "4 years ago",
    text: "New furniture pattern available... price range menimum to High.",
    rating: 5,
  },
  {
    name: "Hanif Shaikh",
    date: "4 years ago",
    text: "Very good work, everything is done on time and changes can be made to the designs",
    rating: 5,
  },
  {
    name: "Shaikh Savban",
    date: "4 years ago",
    text: "Best quality 💯 guaranteed Thanks 😊 Very useful 🙂",
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
          <span className="text-xl font-bold">4.6</span>
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-current" />
            ))}
          </div>
        </div>
        <div className="text-muted-foreground text-sm font-medium mb-6">
          Based on 47 verified Google Reviews
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
              duration: Math.max(100, reviews.length * 6), // Slower, consistent speed
              repeat: Infinity 
            }}
          >
            {/* Repeat the array enough times to ensure seamless infinite scroll */}
            {[...reviews, ...reviews].map((review, idx) => (
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
                  <span className="text-xs text-muted-foreground ml-auto whitespace-nowrap">{review.date}</span>
                </div>
                <p className="text-sm md:text-base text-foreground leading-relaxed mb-4 italic line-clamp-4">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-bold text-sm truncate">{review.name}</span>
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
