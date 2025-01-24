import { useEffect, useState } from "react";
import {
  Plane,
  MapPin,
  Check,
  Phone,
  Mail,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { MemoryRouter as Router } from "react-router-dom";

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="w-full min-h-screen bg-white">
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white  shadow-md py-2" : "bg-transparent py-4"}`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <div className="flex items-center space-x-2">
              <Plane
                className={`h-8 w-8 ${scrolled ? "text-blue-600" : "text-white"}`}
              />
              <span
                className={`text-2xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}
              >
                KS VISA CONSULT
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["Services", "Countries", "Process", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`${scrolled ? "text-gray-600" : "text-white"} hover:text-blue-600 transition-colors`}
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
            <button
              onClick={() => window.location.href = '#contact'} 
              className={`hidden md:block px-6 py-2 rounded-full ${scrolled ? "bg-blue-600 text-white" : "bg-white text-blue-600"} hover:bg-blue-700 hover:text-white transition-colors`}
            >
              Book Consultation
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={scrolled ? "text-gray-900" : "text-white"} />
              ) : (
                <Menu className={scrolled ? "text-gray-900" : "text-white"} />
              )}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-20 md:hidden">
            <div className="flex flex-col items-center space-y-8 p-8">
              {["Services", "Countries", "Process", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {item}
                  </a>
                ),
              )}
              <button onClick={() => { window.location.href = '#contact'; setIsMenuOpen(!isMenuOpen); }}  className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                Book Consultation
              </button>
            </div>
          </div>
        )}
        <section className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
          </div>
          <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-4">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Your Journey to Global Opportunities Starts Here
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Professional visa consultation services for UK, Canada, US, and
                Schengen countries
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button  onClick={() => window.location.href = '#contact'}  className="px-8 py-4 bg-white/10 text-white rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Visa Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive visa consultation and processing
                services for various destinations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: "Student Visas",
                  description:
                    "Study abroad opportunities in prestigious institutions",
                  image:
                    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                },
                {
                  title: "Tourist Visas",
                  description:
                    "Explore dream destinations with hassle-free tourist visas",
                  image:
                    "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
                },
                {
                  title: "Work Visas",
                  description:
                    "Employment opportunities in leading global markets",
                  image:
                    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                },
                {
                  title: "Business Visas",
                  description:
                    "Global business expansion and networking opportunities",
                  image:
                    "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <button className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors flex items-center">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="countries" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Destination Countries
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide visa services for these popular destinations
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  country: "United Kingdom",
                  flag: "https://flagcdn.com/w320/gb.png",
                },
                {
                  country: "Canada",
                  flag: "https://flagcdn.com/w320/ca.png",
                },
                {
                  country: "United States",
                  flag: "https://flagcdn.com/w320/us.png",
                },
                {
                  country: "Schengen Area",
                  flag: "https://flagcdn.com/w320/eu.png",
                },
              ].map((destination, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={destination.flag}
                    alt={destination.country}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-center">
                    {destination.country}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="process" className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Simple and efficient visa application process
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: "Initial Consultation",
                  icon: Phone,
                  description:
                    "Free consultation to understand your requirements",
                },
                {
                  title: "Document Preparation",
                  icon: Check,
                  description:
                    "Assistance with document collection and verification",
                },
                {
                  title: "Application Filing",
                  icon: Mail,
                  description: "Professional handling of your visa application",
                },
                {
                  title: "Visa Approval",
                  icon: Plane,
                  description: "Support until successful visa approval",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-blue-600 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="p-12 text-white">
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Start Your Journey?
                  </h2>
                  <p className="mb-6">
                    Book a free consultation with our visa experts
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6" />
                      <span>+233 593 375 727</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6" />
                      <span>contact@ksvisaconsult.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6" />
                      <span>Accra, East Legon</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-12">
                  <form className="space-y-4">
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-lg border focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                    <select required className="w-full px-4 py-3 rounded-lg border focus:border-blue-600 focus:ring-1 focus:ring-blue-600">
                      <option value="">Select Visa Type</option>
                      <option value="student">Tourist Visa</option>
                      <option value="student">Student Visa</option>
                      <option value="work">Work Visa</option>
                      <option value="business">Business Visa</option>
                    </select>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    ></textarea>
                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Book Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">KS VISA CONSULT</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for global visa services
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Services", "Countries", "Process", "About", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-400 hover:text-white"
                    >
                      {item}
                    </a>
                  ),
                )}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Accra, Ghana</p>
                <p> East Legon</p>
                <p>contact@ksvisaconsult.com</p>
                <p>+233 59 337 5727</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for visa updates and immigration
                news.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg flex-1 text-gray-900"
                />
                <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
