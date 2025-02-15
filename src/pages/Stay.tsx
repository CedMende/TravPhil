import React, { useState } from "react";
import { MapPin, Star, Wifi, Coffee, Phone, Globe, Car, DollarSign } from "lucide-react";
import { Modal } from "../components/Modal";
interface Accommodation {
  id: number;
  name: string;
  type: string;
  description: string;
  price: string;
  rating: number;
  amenities: string[];
  image: string;
  fullDescription?: string;
  address?: string;
  contactNumber?: string;
  website?: string;
  checkIn?: string;
  checkOut?: string;
  roomTypes?: {
    name: string;
    price: string;
    capacity: string;
  }[];
  nearbyAttractions?: string[];
  policies?: string[];
  parking?: string;
}
const accommodations: Accommodation[] = [{
  id: 1,
  name: "Nueva Ecija Grand Hotel",
  type: "hotel",
  description: "Luxury hotel in the heart of the city with modern amenities",
  price: "₱₱₱",
  rating: 4.5,
  amenities: ["wifi", "pool", "restaurant", "spa", "gym"],
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Experience luxury and comfort in the heart of Nueva Ecija. Our hotel offers world-class amenities and exceptional service for both business and leisure travelers.",
  address: "123 Main Street, Cabanatuan City",
  contactNumber: "+63 123 456 7890",
  website: "www.negrandhotel.com",
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",
  roomTypes: [{
    name: "Deluxe Room",
    price: "₱3,500/night",
    capacity: "2 adults"
  }, {
    name: "Executive Suite",
    price: "₱5,500/night",
    capacity: "2 adults, 2 children"
  }, {
    name: "Family Room",
    price: "₱6,500/night",
    capacity: "4 adults"
  }],
  nearbyAttractions: ["City Center Mall (5 mins)", "Plaza Mayor (10 mins)", "Central Market (15 mins)"],
  policies: ["No smoking in rooms", "Pets not allowed", "Extra bed available upon request"],
  parking: "Free parking available"
}, {
  id: 2,
  name: "Riverside Resort",
  type: "resort",
  description: "Peaceful resort with river views and outdoor activities",
  price: "₱₱",
  rating: 4.2,
  amenities: ["wifi", "pool"],
  image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Surrounded by nature, our eco-friendly resort offers a peaceful retreat with stunning mountain views and sustainable practices.",
  address: "Green Valley Road, Nueva Ecija",
  roomTypes: [{
    name: "Garden Villa",
    price: "₱4,000/night",
    capacity: "2 adults"
  }, {
    name: "Mountain View Suite",
    price: "₱5,000/night",
    capacity: "3 adults"
  }]
}, {
  id: 3,
  name: "Farm Valley Homestay",
  type: "homestay",
  description: "Authentic farm stay experience with local family",
  price: "₱",
  rating: 4.8,
  amenities: ["wifi", "restaurant"],
  image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Experience the authentic farm stay experience with local family and enjoy the beauty of the countryside.",
  address: "123 Farm Road, Nueva Ecija",
  roomTypes: [{
    name: "Farm Room",
    price: "₱2,000/night",
    capacity: "2 adults"
  }, {
    name: "Family Room",
    price: "₱3,000/night",
    capacity: "4 adults"
  }]
}, {
  id: 4,
  name: "City Center Hotel",
  type: "hotel",
  description: "Contemporary hotel with business facilities",
  price: "₱₱",
  rating: 4.0,
  amenities: ["wifi", "restaurant"],
  image: "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Experience the comfort and convenience of our contemporary hotel with business facilities.",
  address: "123 City Center Street, Nueva Ecija",
  roomTypes: [{
    name: "Executive Suite",
    price: "₱5,000/night",
    capacity: "2 adults, 2 children"
  }, {
    name: "Deluxe Room",
    price: "₱4,000/night",
    capacity: "2 adults"
  }]
}, {
  id: 5,
  name: "Green Valley Resort",
  type: "resort",
  description: "Eco-friendly resort with panoramic mountain views",
  price: "₱₱",
  rating: 4.6,
  amenities: ["wifi", "pool", "restaurant", "garden"],
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Surrounded by nature, our eco-friendly resort offers a peaceful retreat with stunning mountain views and sustainable practices.",
  address: "Green Valley Road, Nueva Ecija",
  roomTypes: [{
    name: "Garden Villa",
    price: "₱4,000/night",
    capacity: "2 adults"
  }, {
    name: "Mountain View Suite",
    price: "₱5,000/night",
    capacity: "3 adults"
  }]
}, {
  id: 6,
  name: "Heritage Inn",
  type: "hotel",
  description: "Boutique hotel in a restored colonial building",
  price: "₱₱",
  rating: 4.3,
  amenities: ["wifi", "restaurant", "garden"],
  image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Experience the charm of colonial architecture combined with modern comfort in our beautifully restored heritage building.",
  address: "Historical District, Nueva Ecija",
  roomTypes: [{
    name: "Heritage Room",
    price: "₱3,000/night",
    capacity: "2 adults"
  }, {
    name: "Colonial Suite",
    price: "₱4,500/night",
    capacity: "2 adults, 1 child"
  }]
}];
export const Stay = () => {
  const [activeType, setActiveType] = useState("all");
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);
  const filteredAccommodations = activeType === "all" ? accommodations : accommodations.filter(acc => acc.type === activeType);
  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi":
        return <Wifi className="w-4 h-4" />;
      case "pool":
        return <div className="w-4 h-4" />;
      case "restaurant":
        return <Coffee className="w-4 h-4" />;
      default:
        return null;
    }
  };
  return <main className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Where to Stay</h1>
        <p className="text-gray-600 mb-8">
          Find your perfect accommodation in Nueva Ecija
        </p>
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {["all", "hotel", "resort", "homestay"].map(type => <button key={type} onClick={() => setActiveType(type)} className={`px-4 py-2 rounded-full whitespace-nowrap ${activeType === type ? "bg-green-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccommodations.map(accommodation => <div key={accommodation.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedAccommodation(accommodation)}>
              <div className="h-48 bg-cover bg-center" style={{
            backgroundImage: `url(${accommodation.image})`
          }} />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">
                    {accommodation.name}
                  </h3>
                  <span className="text-green-600 font-semibold">
                    {accommodation.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {accommodation.description}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">
                    {accommodation.rating}
                  </span>
                </div>
                <div className="flex gap-3">
                  {accommodation.amenities.map(amenity => <div key={amenity} className="text-gray-500">
                      {getAmenityIcon(amenity)}
                    </div>)}
                </div>
              </div>
            </div>)}
        </div>
        <Modal isOpen={!!selectedAccommodation} onClose={() => setSelectedAccommodation(null)}>
          {selectedAccommodation && <div>
              <div className="h-64 bg-cover bg-center" style={{
            backgroundImage: `url(${selectedAccommodation.image})`
          }} />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">
                    {selectedAccommodation.name}
                  </h2>
                  <span className="text-green-600 font-semibold text-lg">
                    {selectedAccommodation.price}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedAccommodation.fullDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {selectedAccommodation.address && <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{selectedAccommodation.address}</span>
                    </div>}
                  {selectedAccommodation.contactNumber && <div className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 mr-2" />
                      <span>{selectedAccommodation.contactNumber}</span>
                    </div>}
                  {selectedAccommodation.website && <div className="flex items-center text-gray-600">
                      <Globe className="w-5 h-5 mr-2" />
                      <a href={selectedAccommodation.website} className="text-green-600 hover:underline">
                        Visit Website
                      </a>
                    </div>}
                  {selectedAccommodation.parking && <div className="flex items-center text-gray-600">
                      <Car className="w-5 h-5 mr-2" />
                      <span>{selectedAccommodation.parking}</span>
                    </div>}
                </div>
                {selectedAccommodation.roomTypes && <div className="mb-6">
                    <h3 className="font-semibold mb-3">Room Types:</h3>
                    <div className="grid gap-4">
                      {selectedAccommodation.roomTypes.map((room, index) => <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                          <div>
                            <h4 className="font-medium">{room.name}</h4>
                            <p className="text-sm text-gray-600">
                              {room.capacity}
                            </p>
                          </div>
                          <span className="text-green-600">{room.price}</span>
                        </div>)}
                    </div>
                  </div>}
                {selectedAccommodation.amenities && <div className="mb-6">
                    <h3 className="font-semibold mb-2">Amenities:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedAccommodation.amenities.map(amenity => <span key={amenity} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                          {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                        </span>)}
                    </div>
                  </div>}
                {selectedAccommodation.nearbyAttractions && <div className="mb-6">
                    <h3 className="font-semibold mb-2">Nearby Attractions:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedAccommodation.nearbyAttractions.map((attraction, index) => <li key={index}>{attraction}</li>)}
                    </ul>
                  </div>}
                {selectedAccommodation.policies && <div className="border-t pt-4 mt-6">
                    <h3 className="font-semibold mb-2">Policies:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedAccommodation.policies.map((policy, index) => <li key={index}>{policy}</li>)}
                    </ul>
                  </div>}
              </div>
            </div>}
        </Modal>
      </div>
    </main>;
};