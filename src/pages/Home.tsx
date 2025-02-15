import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
export const Home = () => {
  return <main>
      <Hero />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-gray-600">
              Explore the best spots in Nueva Ecija
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            name: "Minalungao National Park",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
            description: "Crystal-clear waters and limestone cliffs"
          }, {
            name: "PMP Paradise Farm",
            image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
            description: "Educational farm tours and experiences"
          }, {
            name: "Gabaldon Falls",
            image: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
            description: "Majestic waterfalls in lush forests"
          }].map((destination, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-cover bg-center" style={{
              backgroundImage: `url(${destination.image})`
            }} />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600">{destination.description}</p>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-8">
            <Link to="/destinations" className="inline-flex items-center text-green-600 hover:text-green-700">
              View all destinations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Things to Do</h2>
            <p className="text-gray-600">Experience the best activities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[{
            name: "River Adventure",
            image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
            duration: "Full Day"
          }, {
            name: "Traditional Rice Farming",
            image: "https://images.unsplash.com/photo-1569132990633-f8b1d543b4c6?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
            duration: "Half Day"
          }].map((activity, index) => <div key={index} className="relative group overflow-hidden rounded-lg">
                <div className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{
              backgroundImage: `url(${activity.image})`
            }}>
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {activity.name}
                    </h3>
                    <p>{activity.duration}</p>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-8">
            <Link to="/activities" className="inline-flex items-center text-green-600 hover:text-green-700">
              Explore all activities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Where to Stay</h2>
            <p className="text-gray-600">Find your perfect accommodation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            name: "Nueva Ecija Grand Hotel",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
            rating: 4.5
          }, {
            name: "Riverside Resort",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
            rating: 4.2
          }, {
            name: "Farm Valley Homestay",
            image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
            rating: 4.8
          }].map((accommodation, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-cover bg-center" style={{
              backgroundImage: `url(${accommodation.image})`
            }} />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {accommodation.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">
                      {accommodation.rating}
                    </span>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-8">
            <Link to="/stay" className="inline-flex items-center text-green-600 hover:text-green-700">
              View all accommodations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600">Don't miss out on these experiences</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[{
            name: "Taong Putik Festival",
            date: "June 24, 2024",
            image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80"
          }, {
            name: "Rice Harvest Festival",
            date: "September 15-17, 2024",
            image: "https://images.unsplash.com/photo-1568819317551-31051b37f69f?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80"
          }].map((event, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md flex">
                <div className="w-1/3 bg-cover bg-center" style={{
              backgroundImage: `url(${event.image})`
            }} />
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                  <p className="text-green-600">{event.date}</p>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-8">
            <Link to="/events" className="inline-flex items-center text-green-600 hover:text-green-700">
              See all events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>;
};