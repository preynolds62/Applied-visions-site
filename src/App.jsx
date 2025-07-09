import logo from './assets/logo.png';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white p-10 text-gray-800 font-sans">
      {/* Header */}
      <header className="text-center mb-10">
        <img src={logo} alt="Applied Visions LLC Logo" className="mx-auto w-32 h-auto mb-4" />
        <h1 className="text-4xl font-serif text-blue-900">Applied Visions LLC</h1>
        <p className="text-lg text-gray-600 mt-2">
          Healthcare Outfitting • Facilities Management • GovTech Solutions
        </p>
      </header>

      {/* Mission */}
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          Applied Visions LLC empowers government clients through seamless initial outfitting & transition
          (IO&T), logistics, and facility management solutions. With over 30 years of military and federal
          expertise, we deliver on time, on budget, and above expectations.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-bold mb-2">Healthcare IO&T</h3>
          <p>Procurement, staging, installation, activation, and move planning for VA and DoD medical facilities.</p>
        </div>
        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-bold mb-2">Facilities Management</h3>
          <p>Lifecycle support from preventive maintenance to emergency readiness for mission-critical buildings.</p>
        </div>
        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-bold mb-2">Logistics & Transition Planning</h3>
          <p>Experienced in staff relocation, equipment delivery coordination, and stakeholder engagement.</p>
        </div>
        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-bold mb-2">IT Systems Support</h3>
          <p>ServiceNow, Snowflake, and secure asset management integration for government systems.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Applied Visions LLC. All rights reserved.
      </footer>
    </div>
  );
}
export default App
