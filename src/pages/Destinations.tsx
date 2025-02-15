import React, { useState, Children, memo } from "react";
import { MapPin, Clock, Phone, Globe, Navigation } from "lucide-react";
import { Modal } from "../components/Modal";
interface Destination {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  fullDescription?: string;
  openingHours?: string;
  contactNumber?: string;
  website?: string;
  address?: string;
  entranceFee?: string;
  bestTimeToVisit?: string;
  activities?: string[];
}
const destinations: Destination[] = [{
  id: 1,
  name: "Minalungao National Park",
  category: "nature",
  description: "Stunning limestone cliffs and crystal-clear river waters",
  image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Minalungao National Park is a protected area featuring dramatic limestone cliffs, crystal-clear emerald waters, and various outdoor activities. The park is perfect for swimming, kayaking, hiking, and cave exploration.",
  openingHours: "6:00 AM - 5:00 PM daily",
  contactNumber: "+63 123 456 7890",
  address: "General Tinio, Nueva Ecija",
  entranceFee: "₱100 per person",
  bestTimeToVisit: "November to May",
  activities: ["River rafting", "Rock climbing", "Cave exploration", "Hiking", "Swimming"]
}, {
  id: 2,
  name: "Fort Magsaysay",
  category: "historical",
  description: "Largest military installation in the Philippines with rich history",
  image: "https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Fort Magsaysay is the largest military reservation in the Philippines and serves as a training ground for the Philippine Army. The fort also houses historical artifacts and military museums.",
  openingHours: "8:00 AM - 4:00 PM (By appointment)",
  contactNumber: "+63 123 456 7891",
  address: "Palayan City, Nueva Ecija",
  entranceFee: "Free (with prior arrangement)",
  bestTimeToVisit: "October to February",
  activities: ["Museum tours", "Military exhibits", "Historical walks"]
}, {
  id: 3,
  name: "Diamond Park",
  category: "nature",
  description: "Scenic park with panoramic views and recreational facilities",
  image: "https://images.unsplash.com/photo-1565138146061-e29b079736c0?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "A beautiful urban park offering various recreational activities and stunning views of the city. Perfect for families and outdoor enthusiasts.",
  openingHours: "5:00 AM - 9:00 PM daily",
  contactNumber: "+63 123 456 7892",
  address: "Cabanatuan City, Nueva Ecija",
  entranceFee: "₱50 per person",
  activities: ["Picnicking", "Jogging", "Photography", "Children's playground"]
}, {
  id: 4,
  name: "Philippine Rice Research Institute",
  category: "agriculture",
  description: "Leading center for rice science and agricultural research",
  image: "https://images.unsplash.com/photo-1568819317551-31051b37f69f?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "PhilRice showcases the latest in rice farming technology and research. Visitors can learn about sustainable agriculture and rice production.",
  openingHours: "8:00 AM - 5:00 PM (Monday-Friday)",
  contactNumber: "+63 123 456 7893",
  address: "Science City of Muñoz, Nueva Ecija",
  entranceFee: "Free for educational tours",
  activities: ["Research facility tours", "Rice farming demos", "Agricultural workshops"]
}, {
  id: 5,
  name: "Gabaldon Falls",
  category: "nature",
  description: "Majestic waterfalls surrounded by lush forest",
  image: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "A series of stunning waterfalls nestled in the mountains of Gabaldon. The site offers hiking trails and natural swimming pools.",
  openingHours: "6:00 AM - 5:00 PM daily",
  contactNumber: "+63 123 456 7894",
  address: "Gabaldon, Nueva Ecija",
  entranceFee: "₱75 per person",
  bestTimeToVisit: "December to May",
  activities: ["Swimming", "Hiking", "Nature photography", "Bird watching"]
}, {
  id: 6,
  name: "Central Luzon State University",
  category: "agriculture",
  description: "Premier agricultural university with demonstration farms",
  image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "CLSU features various agricultural facilities, including demonstration farms, aquaculture facilities, and research centers.",
  openingHours: "8:00 AM - 4:00 PM (Monday-Friday)",
  contactNumber: "+63 123 456 7895",
  address: "Science City of Muñoz, Nueva Ecija",
  activities: ["Campus tours", "Farm visits", "Agricultural demonstrations"]
}, {
  id: 7,
  name: "Old Cabanatuan Church",
  category: "historical",
  description: "Historic Spanish colonial church with beautiful architecture",
  image: "https://images.unsplash.com/photo-1548277870-36a8236b6802?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "This Spanish colonial-era church features stunning architecture and houses important religious artifacts.",
  openingHours: "6:00 AM - 8:00 PM daily",
  contactNumber: "+63 123 456 7896",
  address: "Cabanatuan City, Nueva Ecija",
  entranceFee: "Free",
  bestTimeToVisit: "Year-round",
  activities: ["Church visits", "Historical tours", "Photography"]
}, {
  id: 8,
  name: "PMP Paradise Farm",
  category: "agriculture",
  description: "Educational farm with diverse agricultural activities",
  image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "An educational farm showcasing various agricultural practices and offering hands-on farming experiences.",
  openingHours: "7:00 AM - 5:00 PM daily",
  contactNumber: "+63 123 456 7897",
  address: "San Jose City, Nueva Ecija",
  entranceFee: "₱150 per person",
  activities: ["Farm tours", "Fruit picking", "Animal feeding", "Agricultural workshops"]
}, {
  id: 9,
  name: "General Luna Shrine",
  category: "historical",
  description: "Memorial shrine dedicated to General Antonio Luna",
  image: "https://images.unsplash.com/photo-1552424519-96c5aaee4cc1?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "A historical shrine commemorating General Antonio Luna, featuring artifacts and exhibits about the Philippine Revolution.",
  openingHours: "8:00 AM - 5:00 PM (Tuesday-Sunday)",
  contactNumber: "+63 123 456 7898",
  address: "Cabanatuan City, Nueva Ecija",
  entranceFee: "Free",
  activities: ["Museum tours", "Historical exhibits", "Educational programs"]
}];
export const Destinations = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const filteredDestinations = activeCategory === "all" ? destinations : destinations.filter(dest => dest.category === activeCategory);
  return <main className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Discover Nueva Ecija
        </h1>
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {["all", "nature", "historical", "agriculture"].map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category ? "bg-green-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map(destination => <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedDestination(destination)}>
              <div className="h-48 bg-cover bg-center" style={{
            backgroundImage: `url(${destination.image})`
          }} />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center text-green-600">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">
                    {destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>)}
        </div>
        <Modal isOpen={!!selectedDestination} onClose={() => setSelectedDestination(null)}>
          {selectedDestination && <div>
              <div className="h-64 bg-cover bg-center" style={{
            backgroundImage: `url(${selectedDestination.image})`
          }} />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedDestination.name}
                </h2>
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {selectedDestination.fullDescription}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {selectedDestination.openingHours && <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{selectedDestination.openingHours}</span>
                    </div>}
                  {selectedDestination.contactNumber && <div className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 mr-2" />
                      <span>{selectedDestination.contactNumber}</span>
                    </div>}
                  {selectedDestination.website && <div className="flex items-center text-gray-600">
                      <Globe className="w-5 h-5 mr-2" />
                      <a href={selectedDestination.website} className="text-green-600 hover:underline">
                        Visit Website
                      </a>
                    </div>}
                  {selectedDestination.address && <div className="flex items-center text-gray-600">
                      <Navigation className="w-5 h-5 mr-2" />
                      <span>{selectedDestination.address}</span>
                    </div>}
                </div>
                {selectedDestination.activities && <div className="mb-6">
                    <h3 className="font-semibold mb-2">
                      Available Activities:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedDestination.activities.map((activity, index) => <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                          {activity}
                        </span>)}
                    </div>
                  </div>}
                <div className="border-t pt-4 mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-600">
                        Entrance Fee
                      </h4>
                      <p>{selectedDestination.entranceFee}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-600">
                        Best Time to Visit
                      </h4>
                      <p>{selectedDestination.bestTimeToVisit}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </Modal>
      </div>
    </main>;
};