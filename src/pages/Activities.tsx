import React, { useState } from "react";
import { MapPin, Compass, Users, Utensils, Clock, Phone, DollarSign, AlertCircle } from "lucide-react";
import { Modal } from "../components/Modal";
interface Activity {
  id: number;
  name: string;
  category: string;
  description: string;
  duration: string;
  difficulty: string;
  image: string;
  fullDescription?: string;
  price?: string;
  groupSize?: string;
  includes?: string[];
  requirements?: string[];
  meetingPoint?: string;
  contactNumber?: string;
  guide?: string;
  schedule?: string;
  whatToBring?: string[];
}
const activities: Activity[] = [{
  id: 1,
  name: "River Adventure at Minalungao",
  category: "outdoor",
  description: "Experience river rafting and cliff jumping in crystal clear waters",
  duration: "Full Day",
  difficulty: "Moderate",
  image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Embark on an exciting river adventure at the famous Minalungao National Park. Experience the thrill of river rafting through crystal-clear waters surrounded by towering limestone cliffs.",
  price: "₱1,500 per person",
  groupSize: "2-8 people",
  includes: ["Professional guide", "Safety equipment", "Lunch and refreshments", "Transportation from meeting point"],
  requirements: ["Basic swimming ability", "Good physical condition", "Minimum age of 12 years"],
  meetingPoint: "Minalungao National Park Entrance",
  contactNumber: "+63 123 456 7890",
  guide: "Experienced local guides",
  schedule: "Daily departures at 8:00 AM",
  whatToBring: ["Change of clothes", "Sunscreen", "Water shoes", "Towel"]
}, {
  id: 2,
  name: "Traditional Rice Farming",
  category: "cultural",
  description: "Learn traditional rice farming techniques from local farmers",
  duration: "Half Day",
  difficulty: "Easy",
  image: "https://images.unsplash.com/photo-1569132990633-f8b1d543b4c6?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Learn the traditional methods of rice farming and gain insights into the culture and history of Nueva Ecija.",
  price: "₱800 per person",
  groupSize: "6-12 people",
  includes: ["Guided tour", "Lunch and refreshments"],
  requirements: ["Basic knowledge of agriculture"],
  meetingPoint: "Local Rice Farm",
  contactNumber: "+63 123 456 7890",
  guide: "Local farmers",
  schedule: "Morning sessions",
  whatToBring: ["Water bottle", "Snacks"]
}, {
  id: 3,
  name: "Local Food Tour",
  category: "food",
  description: "Taste authentic Nueva Ecija cuisine and street food",
  duration: "4 Hours",
  difficulty: "Easy",
  image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Explore the diverse culinary scene of Nueva Ecija and taste authentic dishes such as adobo, sinigang, and lechon.",
  price: "₱1,000 per person",
  groupSize: "4-8 people",
  includes: ["Guided tour", "Lunch and refreshments"],
  requirements: ["None"],
  meetingPoint: "Local Market",
  contactNumber: "+63 123 456 7890",
  guide: "Local food vendors",
  schedule: "Afternoon sessions",
  whatToBring: ["Water bottle", "Snacks"]
}, {
  id: 4,
  name: "Forest Trail Hiking",
  category: "outdoor",
  description: "Guided hiking through scenic forest trails",
  duration: "3 Hours",
  difficulty: "Moderate",
  image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Explore the lush and diverse forests of Nueva Ecija and enjoy the beauty of nature.",
  price: "₱800 per person",
  groupSize: "4-8 people",
  includes: ["Guided tour", "Lunch and refreshments"],
  requirements: ["Good physical condition"],
  meetingPoint: "Forest Trail Entrance",
  contactNumber: "+63 123 456 7890",
  guide: "Local guides",
  schedule: "Morning sessions",
  whatToBring: ["Water bottle", "Snacks"]
}, {
  id: 5,
  name: "Mountain Biking Adventure",
  category: "outdoor",
  description: "Explore scenic trails through Nueva Ecija's landscapes",
  duration: "Half Day",
  difficulty: "Moderate to Hard",
  image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Navigate through challenging terrain and scenic mountain trails while enjoying breathtaking views of Nueva Ecija's landscapes.",
  price: "₱1,200 per person",
  groupSize: "4-10 people",
  includes: ["Bike rental", "Helmet", "Guide", "Energy snacks"],
  requirements: ["Good physical fitness", "Basic biking skills"],
  meetingPoint: "Trail Head Center",
  schedule: "Morning and afternoon sessions"
}, {
  id: 6,
  name: "Traditional Cooking Class",
  category: "cultural",
  description: "Learn to cook authentic Nueva Ecija dishes",
  duration: "3 Hours",
  difficulty: "Easy",
  image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Master the art of Filipino cuisine with local chefs. Learn traditional recipes and cooking techniques.",
  price: "₱800 per person",
  groupSize: "6-12 people",
  includes: ["Ingredients", "Recipe booklet", "Lunch"],
  meetingPoint: "Local Culinary Center",
  schedule: "Tuesday and Thursday mornings"
}];
export const Activities = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const filteredActivities = activeCategory === "all" ? activities : activities.filter(activity => activity.category === activeCategory);
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "outdoor":
        return <Compass className="w-5 h-5" />;
      case "cultural":
        return <Users className="w-5 h-5" />;
      case "food":
        return <Utensils className="w-5 h-5" />;
      default:
        return <div className="w-5 h-5" />;
    }
  };
  return <main className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Things to Do</h1>
        <p className="text-gray-600 mb-8">
          Explore the best activities Nueva Ecija has to offer
        </p>
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {["all", "outdoor", "cultural", "food"].map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-2 ${activeCategory === category ? "bg-green-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}>
              {getCategoryIcon(category)}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map(activity => <div key={activity.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedActivity(activity)}>
              <div className="h-48 bg-cover bg-center" style={{
            backgroundImage: `url(${activity.image})`
          }} />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{activity.duration}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded">
                    {activity.difficulty}
                  </span>
                </div>
              </div>
            </div>)}
        </div>
        <Modal isOpen={!!selectedActivity} onClose={() => setSelectedActivity(null)}>
          {selectedActivity && <div>
              <div className="h-64 bg-cover bg-center" style={{
            backgroundImage: `url(${selectedActivity.image})`
          }} />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedActivity.name}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedActivity.fullDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{selectedActivity.duration}</span>
                  </div>
                  {selectedActivity.price && <div className="flex items-center text-gray-600">
                      <DollarSign className="w-5 h-5 mr-2" />
                      <span>{selectedActivity.price}</span>
                    </div>}
                  {selectedActivity.meetingPoint && <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{selectedActivity.meetingPoint}</span>
                    </div>}
                  {selectedActivity.groupSize && <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      <span>{selectedActivity.groupSize}</span>
                    </div>}
                </div>
                {selectedActivity.includes && <div className="mb-6">
                    <h3 className="font-semibold mb-2">Includes:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedActivity.includes.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  </div>}
                {selectedActivity.requirements && <div className="mb-6">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Requirements:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedActivity.requirements.map((req, index) => <li key={index}>{req}</li>)}
                    </ul>
                  </div>}
                {selectedActivity.whatToBring && <div className="border-t pt-4 mt-6">
                    <h3 className="font-semibold mb-2">What to Bring:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedActivity.whatToBring.map((item, index) => <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                          {item}
                        </span>)}
                    </div>
                  </div>}
              </div>
            </div>}
        </Modal>
      </div>
    </main>;
};