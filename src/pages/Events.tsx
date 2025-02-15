import React, { useState } from "react";
import { Calendar, MapPin, Users, Clock, Phone, Globe, Ticket } from "lucide-react";
import { Modal } from "../components/Modal";
interface Event {
  id: number;
  name: string;
  category: string;
  date: string;
  location: string;
  description: string;
  image: string;
  fullDescription?: string;
  schedule?: string[];
  activities?: string[];
  ticketInfo?: {
    type: string;
    price: string;
  }[];
  organizer?: string;
  contactNumber?: string;
  website?: string;
  highlights?: string[];
  guidelines?: string[];
  history?: string;
}
const events: Event[] = [{
  id: 1,
  name: "Taong Putik Festival",
  category: "cultural",
  date: "June 24, 2024",
  location: "Aliaga",
  description: "Experience the unique mud-covered celebration honoring St. John the Baptist",
  image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  fullDescription: "Join the locals in this unique festival where participants cover themselves in mud and dried banana leaves to honor St. John the Baptist. This century-old tradition symbolizes humility and the cleansing power of baptism.",
  schedule: ["4:00 AM - Dawn procession", "6:00 AM - Holy Mass", "8:00 AM - Main festival parade", "2:00 PM - Cultural performances", "7:00 PM - Evening celebrations"],
  activities: ["Mud ritual", "Religious procession", "Cultural performances", "Local food festival", "Street dancing"],
  ticketInfo: [{
    type: "General Admission",
    price: "Free"
  }, {
    type: "VIP Package (with guided tour)",
    price: "₱500"
  }],
  organizer: "Aliaga Tourism Office",
  contactNumber: "+63 123 456 7890",
  website: "www.taongputik.com",
  highlights: ["Traditional mud ritual", "Religious ceremonies", "Cultural shows", "Local delicacies", "Photo opportunities"],
  guidelines: ["Wear appropriate clothing", "Bring change of clothes", "Respect local traditions", "Follow safety instructions"],
  history: "The Taong Putik Festival has been celebrated for over 100 years in Aliaga, Nueva Ecija. The tradition began..."
}, {
  id: 2,
  name: "Rice Harvest Festival",
  category: "agricultural",
  date: "September 15-17, 2024",
  location: "Cabanatuan City",
  description: "Celebrate the bountiful harvest with local farmers and cultural performances",
  image: "https://images.unsplash.com/photo-1568819317551-31051b37f69f?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  schedule: ["10:00 AM - Harvest festival open", "2:00 PM - Cultural performances", "7:00 PM - Evening celebrations"],
  activities: ["Harvest festival", "Cultural performances", "Local food festival", "Street dancing"],
  ticketInfo: [{
    type: "General Admission",
    price: "Free"
  }, {
    type: "VIP Package (with guided tour)",
    price: "₱500"
  }],
  organizer: "Cabanatuan City Government",
  contactNumber: "+63 123 456 7890",
  website: "www.cabanatuanfestival.com",
  highlights: ["Harvest festival", "Cultural performances", "Local delicacies", "Photo opportunities"],
  guidelines: ["Wear appropriate clothing", "Bring change of clothes", "Respect local traditions", "Follow safety instructions"],
  history: "The Rice Harvest Festival has been celebrated for over 100 years in Cabanatuan City, Nueva Ecija. The tradition began..."
}, {
  id: 3,
  name: "Nueva Ecija Food Fair",
  category: "food",
  date: "August 1-3, 2024",
  location: "Science City of Muñoz",
  description: "Taste the best local cuisine and traditional delicacies",
  image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  schedule: ["9:00 AM - Food stalls open", "11:00 AM - Cooking demonstrations", "3:00 PM - Food competitions", "6:00 PM - Evening market"],
  activities: ["Food tasting", "Cooking demos", "Chef competitions", "Food workshops"],
  ticketInfo: [{
    type: "Entry Pass",
    price: "₱100"
  }, {
    type: "VIP Pass (includes tastings)",
    price: "₱500"
  }],
  organizer: "Science City of Muñoz",
  contactNumber: "+63 123 456 7890",
  website: "www.nuevaejicafair.com",
  highlights: ["Food tasting", "Cooking demos", "Chef competitions", "Food workshops"],
  guidelines: ["Wear appropriate clothing", "Bring change of clothes", "Respect local traditions", "Follow safety instructions"],
  history: "The Nueva Ecija Food Fair has been celebrated for over 100 years in Science City of Muñoz, Nueva Ecija. The tradition began..."
}, {
  id: 4,
  name: "Philippine Carabao Festival",
  category: "cultural",
  date: "May 14, 2024",
  location: "San Jose City",
  description: "Annual celebration featuring carabao races and milk products showcase",
  image: "https://images.unsplash.com/photo-1534777367038-9404f45b869a?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  schedule: ["10:00 AM - Carabao races", "2:00 PM - Milk products showcase", "7:00 PM - Evening celebrations"],
  activities: ["Carabao races", "Milk products showcase", "Local food festival", "Street dancing"],
  ticketInfo: [{
    type: "General Admission",
    price: "Free"
  }, {
    type: "VIP Package (with guided tour)",
    price: "₱500"
  }],
  organizer: "San Jose City Government",
  contactNumber: "+63 123 456 7890",
  website: "www.carabaofestival.com",
  highlights: ["Carabao races", "Milk products showcase", "Local delicacies", "Photo opportunities"],
  guidelines: ["Wear appropriate clothing", "Bring change of clothes", "Respect local traditions", "Follow safety instructions"],
  history: "The Philippine Carabao Festival has been celebrated for over 100 years in San Jose City, Nueva Ecija. The tradition began..."
}, {
  id: 5,
  name: "Arts and Music Festival",
  category: "cultural",
  date: "July 15-17, 2024",
  location: "Cabanatuan City",
  description: "Three days of local art exhibitions and musical performances",
  image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  schedule: ["10:00 AM - Art exhibitions open", "2:00 PM - Musical performances", "7:00 PM - Evening concerts"],
  activities: ["Art exhibitions", "Live music", "Workshop sessions", "Local artist meetups"],
  ticketInfo: [{
    type: "Day Pass",
    price: "₱200"
  }, {
    type: "3-Day Pass",
    price: "₱500"
  }]
}, {
  id: 6,
  name: "Local Food Festival",
  category: "food",
  date: "October 1-3, 2024",
  location: "Science City of Muñoz",
  description: "Showcase of Nueva Ecija's best local cuisine and delicacies",
  image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
  schedule: ["9:00 AM - Food stalls open", "11:00 AM - Cooking demonstrations", "3:00 PM - Food competitions", "6:00 PM - Evening market"],
  activities: ["Food tasting", "Cooking demos", "Chef competitions", "Food workshops"],
  ticketInfo: [{
    type: "Entry Pass",
    price: "₱100"
  }, {
    type: "VIP Pass (includes tastings)",
    price: "₱500"
  }]
}];
export const Events = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const filteredEvents = activeCategory === "all" ? events : events.filter(event => event.category === activeCategory);
  return <main className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Upcoming Events
        </h1>
        <p className="text-gray-600 mb-8">
          Discover festivals and cultural celebrations in Nueva Ecija
        </p>
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {["all", "cultural", "agricultural", "food"].map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category ? "bg-green-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map(event => <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row cursor-pointer" onClick={() => setSelectedEvent(event)}>
              <div className="h-48 md:w-48 bg-cover bg-center flex-shrink-0" style={{
            backgroundImage: `url(${event.image})`
          }} />
              <div className="p-6 flex-grow">
                <div className="flex items-center text-green-600 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {event.location}
                </div>
              </div>
            </div>)}
        </div>
        <Modal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
          {selectedEvent && <div>
              <div className="h-64 bg-cover bg-center" style={{
            backgroundImage: `url(${selectedEvent.image})`
          }} />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedEvent.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  {selectedEvent.organizer && <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      <span>{selectedEvent.organizer}</span>
                    </div>}
                  {selectedEvent.contactNumber && <div className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 mr-2" />
                      <span>{selectedEvent.contactNumber}</span>
                    </div>}
                </div>
                {selectedEvent.fullDescription && <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedEvent.fullDescription}
                    </p>
                  </div>}
                {selectedEvent.schedule && <div className="mb-6">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Event Schedule
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {selectedEvent.schedule.map((time, index) => <li key={index}>{time}</li>)}
                    </ul>
                  </div>}
                {selectedEvent.activities && <div className="mb-6">
                    <h3 className="font-semibold mb-2">Activities:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.activities.map((activity, index) => <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                          {activity}
                        </span>)}
                    </div>
                  </div>}
                {selectedEvent.ticketInfo && <div className="mb-6">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Ticket className="w-5 h-5 mr-2" />
                      Ticket Information
                    </h3>
                    <div className="space-y-2">
                      {selectedEvent.ticketInfo.map((ticket, index) => <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                          <span>{ticket.type}</span>
                          <span className="font-semibold text-green-600">
                            {ticket.price}
                          </span>
                        </div>)}
                    </div>
                  </div>}
                {selectedEvent.guidelines && <div className="border-t pt-4 mt-6">
                    <h3 className="font-semibold mb-2">Guidelines:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedEvent.guidelines.map((guideline, index) => <li key={index}>{guideline}</li>)}
                    </ul>
                  </div>}
              </div>
            </div>}
        </Modal>
      </div>
    </main>;
};