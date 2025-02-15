import React, { useState } from "react";
import { Star, ThumbsUp } from "lucide-react";
const reviews = [{
  id: 1,
  name: "Maria Santos",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.1&auto=format&fit=crop&w=150&q=80",
  rating: 5,
  date: "March 15, 2024",
  location: "Minalungao National Park",
  review: "An absolute hidden gem! The limestone cliffs and crystal-clear waters are breathtaking. The local guides were very knowledgeable and friendly.",
  helpful: 24
}, {
  id: 2,
  name: "John Cruz",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.1&auto=format&fit=crop&w=150&q=80",
  rating: 4,
  date: "March 10, 2024",
  location: "Farm Valley Homestay",
  review: "Great authentic experience staying with a local family. The traditional breakfast was delicious, though the roosters wake you up early!",
  helpful: 18
}, {
  id: 3,
  name: "Ana Rivera",
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.1&auto=format&fit=crop&w=150&q=80",
  rating: 5,
  date: "March 5, 2024",
  location: "Taong Putik Festival",
  review: "One of the most unique cultural experiences I've ever had! The community's warmth and hospitality made the festival even more special.",
  helpful: 31
}, {
  id: 4,
  name: "Mike Garcia",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.1&auto=format&fit=crop&w=150&q=80",
  rating: 4,
  date: "March 1, 2024",
  location: "Nueva Ecija Food Tour",
  review: "The local cuisine exceeded my expectations. Every stop on the tour offered something unique and delicious. Highly recommended!",
  helpful: 15
}];
export const Reviews = () => {
  const [sortBy, setSortBy] = useState("recent");
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "helpful") return b.helpful - a.helpful;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />);
  };
  return <main className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Traveler Reviews
        </h1>
        <p className="text-gray-600 mb-8">
          Read what others are saying about their Nueva Ecija experience
        </p>
        <div className="flex justify-end mb-6">
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="bg-white border border-gray-200 rounded-md px-4 py-2 text-sm">
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>
        <div className="space-y-6">
          {sortedReviews.map(review => <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{review.name}</h3>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    {renderStars(review.rating)}
                  </div>
                  <div className="text-sm text-green-600 mb-3">
                    {review.location}
                  </div>
                  <p className="text-gray-600 mb-4">{review.review}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {review.helpful} found this helpful
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </main>;
};