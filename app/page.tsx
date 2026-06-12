import Link from 'next/link';
import { ArrowRight, Phone, Wrench, Clock, MapPin, Shield, Car } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Kwik Kar colors: black, gray, red */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white min-h-[80vh] flex items-center">
        {/* Checkered pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-red-600 rounded-full w-24 h-24 flex items-center justify-center animate-pulse">
                <Wrench className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">KWIK KAR LUBE &amp; TUNE</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your Neighborhood Auto Care Experts in Carthage Since 1967
            </p>
            <p className="text-lg text-slate-400 mb-6">
              Full-service oil changes, brake repair, A/C service &amp; complete auto maintenance
            </p>
            
            {/* Promo Banner */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg px-6 py-4 inline-block mb-6 shadow-lg">
              <p className="font-bold text-lg">🎉 SAVE $15 ON ANY FULL-SERVICE OIL CHANGE!</p>
              <p className="text-sm">Use Code: <span className="font-mono font-bold bg-black text-white px-2 rounded">WEFA15</span></p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a 
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                View Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="tel:9036931234"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition shadow-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call for Appointment
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-slate-300">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                459 W Panola St, Carthage, TX 75633
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Mon-Fri: 7:30am - 6:00pm | Sat: 7:30am - 2:00pm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Bar */}
      <section className="bg-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <p className="font-bold">12mo/12k Mile Warranty</p>
              <p className="text-red-100 text-sm">On all repairs</p>
            </div>
            <div>
              <Car className="w-8 h-8 mx-auto mb-2" />
              <p className="font-bold">Fast Service</p>
              <p className="text-red-100 text-sm">While you wait</p>
            </div>
            <div>
              <Wrench className="w-8 h-8 mx-auto mb-2" />
              <p className="font-bold">Expert Technicians</p>
              <p className="text-red-100 text-sm">Certified pros</p>
            </div>
            <div>
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <p className="font-bold">Convenient Hours</p>
              <p className="text-red-100 text-sm">Early &amp; late</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Complete Auto Care Services</h2>
            <p className="text-xl text-slate-600">Everything your vehicle needs—done right the first time</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Oil Change */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🛢️</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Oil Changes</h3>
              <ul className="space-y-2 text-slate-600 mb-4">
                <li>✓ Full-service drain &amp; refill</li>
                <li>✓ Filter replacement</li>
                <li>✓ Multi-point inspection</li>
                <li>✓ Free car wash with full service</li>
              </ul>
              <p className="text-center text-lg font-bold text-red-600">$15 OFF with code WEFA15</p>
            </div>

            {/* Brakes */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🛑</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Brake Service</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Brake pad replacement</li>
                <li>✓ Rotor resurfacing &amp; replacement</li>
                <li>✓ Caliper service</li>
                <li>✓ Brake fluid flush</li>
                <li>✓ ABS system diagnostics</li>
              </ul>
            </div>

            {/* A/C Service */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">❄️</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">A/C &amp; Heating</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ A/C recharge &amp; leak detection</li>
                <li>✓ Compressor service</li>
                <li>✓ Heater core repair</li>
                <li>✓ Blower motor replacement</li>
                <li>✓ Climate control diagnostics</li>
              </ul>
            </div>

            {/* Tire Service */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🔘</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Tire Services</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Tire rotation &amp; balance</li>
                <li>✓ Flat repair</li>
                <li>✓ Tire sales &amp; installation</li>
                <li>✓ Wheel alignment</li>
                <li>✓ TPMS service</li>
              </ul>
            </div>

            {/* Maintenance */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-500">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Scheduled Maintenance</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Factory scheduled service</li>
                <li>✓ Fluid checks &amp; top-offs</li>
                <li>✓ Battery testing &amp; replacement</li>
                <li>✓ Belts &amp; hoses inspection</li>
                <li>✓ Air filter replacement</li>
              </ul>
            </div>

            {/* General Repair */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-500">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">General Auto Repair</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Engine diagnostics</li>
                <li>✓ Check engine light repair</li>
                <li>✓ Exhaust system service</li>
                <li>✓ Suspension &amp; steering</li>
                <li>✓ Complete multi-point inspection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Kwik Kar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-red-100 to-orange-100 h-80 rounded-xl flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-5xl mb-2">🏪⚡</p>
                  <p className="text-slate-800 font-semibold text-lg">The Dealership Alternative</p>
                  <p className="text-slate-600 text-sm mt-2">Same quality, faster service, fair prices</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Carthage Chooses Kwik Kar</h2>
              <p className="text-lg text-slate-600 mb-6">
                For decades, local drivers have trusted Kwik Kar Lube &amp; Tune as their neighborhood alternative to expensive dealership service. We&apos;re not just another chain—we&apos;re your neighbors who happen to know cars inside and out.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                What sets us apart? Speed without sacrificing quality. Transparent pricing upfront. And a warranty that backs our work—12 months or 12,000 miles on all repairs. When you choose Kwik Kar, you&apos;re choosing peace of mind.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-0.5" />
                  <span className="text-slate-700"><strong>Certified Technicians</strong> - Continuous training on latest vehicles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-0.5" />
                  <span className="text-slate-700"><strong>Fair Pricing</strong> - No dealership markup, no surprises</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-0.5" />
                  <span className="text-slate-700"><strong>Fast Turnaround</strong> - Most services while you wait</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-slate-600">Real reviews from real Carthage drivers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Great garage and they know their stuff. This will be my go-to now for auto service.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Facebook Reviewer</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-yellow-400 text-xl">★★★★☆</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Fair prices, honest guys, and quick turnaround. Been bringing my trucks here for years.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Local Customer</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;$15 off coupon made it even better. Got my oil changed and had time to grab lunch before pickup.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Regular Customer</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Need Auto Service Today?</h2>
          <p className="text-xl mb-8">Walk-ins welcome, appointments preferred</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-700 text-lg font-semibold rounded-lg hover:bg-slate-100 transition shadow-lg"
            >
              See All Services
            </a>
            <a 
              href="tel:9036931234"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-red-700 transition shadow-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call for Appointment
            </a>
          </div>
          <div className="mt-8 flex justify-center items-center text-slate-300">
            <Clock className="w-5 h-5 mr-2" />
            Mon-Fri: 7:30am - 6:00pm | Sat: 7:30am - 2:00pm | Sun: Closed
          </div>
        </div>
      </section>
    </div>
  );
}
