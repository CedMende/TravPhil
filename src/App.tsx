import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Destinations } from "./pages/Destinations";
import { Activities } from "./pages/Activities";
import { Stay } from "./pages/Stay";
import { Events } from "./pages/Events";
import { Reviews } from "./pages/Reviews";
export function App() {
  return <Router>
      <div className="w-full min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>;
}