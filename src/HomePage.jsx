import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <header className="flex items-center justify-between py-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold">Applied Visions LLC</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#clients" className="hover:underline">Clients</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="mt-12 space-y-16">
        <section className="text-center" id="hero">
          <h2 className="text-4xl font-bold mb-4">Federal Solutions That Move You Forward</h2>
          <p className="max-w-xl mx-auto mb-6 text-lg text-gray-600">
            Applied Visions delivers expert Initial Outfitting, Transition, Facilities Management, and Business Consulting services to federal clients.
          </p>
          <button className="text-lg px-6 py-3 bg-blue-600 text-white rounded">Learn More</button>
        </section>

        <section id="about" className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-2">About Us</h3>
          <p className="text-gray-700">
            Founded by veterans with decades of experience, Applied Visions LLC supports federal healthcare and logistics operations through tailored consulting, efficient transitions, and mission-ready activation services.
          </p>
        </section>

        <section id="services" className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-6">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-xl shadow">
              <h4 className="text-xl font-bold mb-2">Initial Outfitting & Transition</h4>
              <p className="text-sm text-gray-600">From equipment procurement to staff relocation, we deliver full-spectrum IO&T services for government healthcare facilities.</p>
            </div>
            <div className="p-4 border rounded-xl shadow">
              <h4 className="text-xl font-bold mb-2">Facilities Management</h4>
              <p className="text-sm text-gray-600">Streamlined, compliant, and secure management of federal properties and medical campuses.</p>
            </div>
            <div className="p-4 border rounded-xl shadow">
              <h4 className="text-xl font-bold mb-2">Business Consulting</h4>
              <p className="text-sm text-gray-600">Federal acquisition support, logistics consulting, and performance improvement tailored to agency goals.</p>
            </div>
          </div>
        </section>

        <section id="clients" className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Clients</h3>
          <p className="text-gray-700 mb-4">Proudly serving the VA, FEMA, DoD, and other federal agencies with precision and integrity.</p>
          <p className="text-gray-500 text-sm italic">Case studies coming soon.</p>
        </section>

        <section id="contact" className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-600 mb-4">Have a project or question? Reach out today.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
            <textarea placeholder="Message" className="w-full border p-2 rounded" rows="4"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="mt-16 border-t pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Applied Visions LLC. All rights reserved.
      </footer>
    </div>
  );
}