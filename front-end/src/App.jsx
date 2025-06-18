import React, { useState, useEffect } from 'react';
import { Menu, X, Star, Calendar, Clock, MapPin, Phone, Mail, Sun, Moon, Play, ChevronRight, Check, Users, Bed, Wifi, Car, Coffee, Utensils, Music, Trees, Waves } from 'lucide-react';
import { Facebook, Instagram, Twitter, MessageCircle ,ChefHat ,Sparkles ,Flame ,Heart ,Award , Send} from 'lucide-react';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('customer');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
 
  
  // Sample data
  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Truffle Arancini', description: 'Crispy risotto balls with black truffle, parmesan, and herb aioli', price: '$16', image: 'https://images.pexels.com/photos/15550434/pexels-photo-15550434/free-photo-of-chocolate-pralines-on-a-black-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Tuna Tartare', description: 'Fresh yellowfin tuna with avocado, citrus, and sesame crackers', price: '$22', image: 'https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Salmon Carpaccio',description: 'Thinly sliced raw salmon with lemon zest, olive oil, capers, and arugula',price: '$20',image: 'https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
        { name: 'Crab Cakes with Remoulade', description: 'Golden lump crab cakes served with spicy remoulade and fresh herbs', price: '$23', image: 'https://img.freepik.com/free-photo/bottom-view-chicken-nuggets-lettuce-sauce-plate-dark-red-table_140725-112074.jpg'},
        { name: 'Goat Cheese Croquettes', description: 'Crispy fried goat cheese balls with beetroot purée and pistachio dust', price: '$17', image: 'https://www.amummytoo.co.uk/wp-content/uploads/2020/04/goats-cheese-croquettes-1.jpg'},
        { name: 'Stuffed Zucchini Blossoms', description: 'Delicate zucchini flowers filled with ricotta and herbs, lightly fried', price: '$19', image: 'https://live.staticflickr.com/8611/28082528120_604ade9912_h.jpg'}


      ]
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Wagyu Beef Tenderloin', description: 'Premium wagyu with roasted vegetables and red wine reduction', price: '$48', image: 'https://images.pexels.com/photos/17593641/pexels-photo-17593641/free-photo-of-close-up-of-a-bowl-of-ramen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Pan-Seared Salmon', description: 'Atlantic salmon with quinoa pilaf and lemon herb sauce', price: '$32', image: 'https://images.pexels.com/photos/8696559/pexels-photo-8696559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Grilled Sea Bass', description: 'Mediterranean sea bass with rosemary potatoes and grilled vegetables',price: '$34',image: 'https://images.pexels.com/photos/5713756/pexels-photo-5713756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
        { name: 'Lemon Herb Chicken Breast', description: 'Free-range chicken breast with garlic mashed potatoes and green beans',price: '$29',image: 'https://images.pexels.com/photos/5769377/pexels-photo-5769377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
        { name: 'Miso Glazed Cod', description: 'Black cod marinated in miso, served with jasmine rice and bok choy',price: '$36',image: 'https://images.pexels.com/photos/26341213/pexels-photo-26341213/free-photo-of-top-view-of-a-dish-with-meat-served-on-a-black-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
        { name: 'Herb-Crusted Lamb Rack', description: 'New Zealand lamb with mint demi-glace and truffle mashed potatoes',price: '$42',image: 'https://images.pexels.com/photos/4411711/pexels-photo-4411711.jpeg'}

      ]
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Chocolate Soufflé', description: 'Rich dark chocolate soufflé with vanilla bean ice cream', price: '$14', image: 'https://images.pexels.com/photos/8380252/pexels-photo-8380252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Vanilla Crème Brûlée', description: 'Classic French custard with a caramelized sugar crust and fresh berries', price: '$13', image: 'https://images.pexels.com/photos/8250845/pexels-photo-8250845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
        { name: 'Tiramisu', description: 'Layered espresso-soaked ladyfingers with mascarpone cream and cocoa powder', price: '$15', image: 'https://images.pexels.com/photos/16041846/pexels-photo-16041846/free-photo-of-photo-of-a-glass-with-tiramisu-and-a-small-bowl-of-coffee-beans.jpeg'},
        { name: 'Molten Lava Cake', description: 'Warm chocolate cake with a gooey center, served with vanilla ice cream', price: '$14', image: 'https://gimmedelicious.com/wp-content/uploads/2020/01/Chocolate-Molten-Lava-Cakes-2-3.jpg'},
        { name: 'Lemon Tart', description: 'Zesty lemon curd in a buttery shortbread crust with whipped cream', price: '$12', image: 'https://cdn.pixabay.com/photo/2016/03/27/19/24/cake-1283824_1280.jpg'},
        { name: 'Pistachio Gelato', description: 'Creamy Italian-style pistachio gelato topped with crushed nuts', price: '$11', image: 'https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/09/Pistachio-ice-cream-hero-04.jpg'}

      ]
    }
  ];

  const rooms = [
    {
      id: 1,
      name: 'Garden View',
      description: 'Spacious suite overlooking our beautiful garden with king bed ',
      price: '$299/night',
      image: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      amenities: ['King Bed', 'Garden View', 'Private Balcony', 'Mini Bar'],
      available: true
    },
    {
      id: 2,
      name: 'Executive Room',
      description: 'Modern executive room with city view and work desk',
      price: '$599/night',
      image: 'https://images.pexels.com/photos/5387614/pexels-photo-5387614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      amenities: ['Queen Bed', 'City View', 'Work Desk', 'High-Speed WiFi'],
      available: true
    },
    {
      id: 3,
      name: 'Family Suite',
      description: 'Perfect for families with separate living area and two bedrooms',
      price: '$399/night',
      image: 'https://images.pexels.com/photos/32301957/pexels-photo-32301957/free-photo-of-coastal-living-room-with-ocean-view-and-modern-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      amenities: ['2 Bedrooms', 'Living Area', 'Kitchenette', 'Pool View'],
      available: false
    },
    {
      id: 4,
      name: 'Ocean Escape',
      description: 'Elegant suite with panoramic ocean views, luxurious linens, and spa-inspired bathroom',
      price: '$429/night',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      amenities: ['King Bed', 'Ocean View', 'Private Terrace', 'In-Room Spa Tub'],
      available: true
}

  ];

  const amenities = [
    { name: 'Swimming Pool', icon: Waves, description: 'Olympic-sized outdoor pool with poolside service' },
    { name: 'Garden Park', icon: Trees, description: 'Beautiful landscaped gardens perfect for relaxation' },
    { name: 'Kids Playground', icon: Users, description: 'Safe and fun playground area for children' },
    { name: 'Live Music Zone', icon: Music, description: 'Intimate venue featuring live performances nightly' },
    { name: 'Spa & Wellness', icon: Coffee, description: 'Full-service spa with massage and wellness treatments' },
    { name: 'Free WiFi', icon: Wifi, description: 'Complimentary high-speed internet throughout the property' },
    { name: 'Valet Parking', icon: Car, description: 'Convenient valet parking service for all guests' },
    { name: 'Fine Dining', icon: Utensils, description: 'Award-winning restaurant with world-class cuisine' }
  ];

  const testimonials = [
    { name: 'Sarah Johnson', rating: 5, text: 'Absolutely incredible experience! The food was phenomenal and the service was impeccable.', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face' },
    { name: 'Michael Chen', rating: 5, text: 'The ambiance is perfect for special occasions. Our anniversary dinner was unforgettable!', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
    { name: 'Emily Rodriguez', rating: 4, text: 'Great location and beautiful rooms. The garden view suite was spectacular!', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
  ];

  const galleryImages = [
    'https://cdn.pixabay.com/photo/2016/02/10/13/35/hotel-1191718_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_1280.jpg',
    'https://images.pexels.com/photos/2565222/pexels-photo-2565222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://cdn.pixabay.com/photo/2017/04/28/22/14/room-2269591_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/02/01/06/12/upholstery-4809588_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  
  
  
  
  
  
  const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? darkMode 
          ? 'bg-gray-900/80 shadow-xl shadow-purple-500/10' 
          : 'bg-white/80 shadow-xl shadow-blue-500/10'
        : darkMode 
          ? 'bg-transparent' 
          : 'bg-transparent'
    } backdrop-blur-xl border-b border-opacity-20 ${
      darkMode ? 'border-purple-500/30' : 'border-blue-500/30'
    }`}>
      
      {/* Animated gradient background overlay */}
      <div className={`absolute inset-0 opacity-30 transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className={`absolute inset-0 bg-gradient-to-r ${
          darkMode 
            ? 'from-purple-900/20 via-blue-900/20 to-cyan-900/20' 
            : 'from-blue-50/50 via-purple-50/50 to-cyan-50/50'
        } animate-gradient-x`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo with enhanced styling */}
          <div className="flex-shrink-0 group">
            <h1 className={`text-2xl font-bold transition-all duration-300 cursor-pointer transform group-hover:scale-105 ${
              darkMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600'
            } drop-shadow-lg`}>
              Gyllo Trep
            </h1>
            {/* Animated underline */}
            <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
              darkMode ? 'bg-gradient-to-r from-purple-400 to-cyan-400' : 'bg-gradient-to-r from-blue-500 to-purple-500'
            }`} />
          </div>
          
          {/* Desktop Navigation with enhanced buttons */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {['home', 'menu', 'rooms', 'amenities', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 group ${
                    currentPage === item
                      ? darkMode 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                      : darkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/80'
                  } backdrop-blur-sm`}
                >
                  {item}
                  {/* Animated bottom border for active state */}
                  {currentPage === item && (
                    <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-full ${
                      darkMode ? 'bg-cyan-400' : 'bg-blue-400'
                    } animate-pulse`} />
                  )}
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    darkMode ? 'bg-purple-400/10' : 'bg-blue-400/10'
                  } blur-sm`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right side controls with enhanced styling */}
          <div className="flex items-center space-x-4">
            
            {/* Dark mode toggle with animated icon */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${
                darkMode 
                  ? 'text-yellow-400 hover:text-yellow-300 bg-yellow-400/10 hover:bg-yellow-400/20' 
                  : 'text-gray-600 hover:text-gray-800 bg-gray-100/50 hover:bg-gray-200/50'
              } backdrop-blur-sm shadow-lg`}
            >
              <div className="relative">
                {darkMode ? (
                  <Sun className="h-5 w-5 transition-transform duration-300 rotate-0" />
                ) : (
                  <Moon className="h-5 w-5 transition-transform duration-300 rotate-0" />
                )}
                {/* Animated background glow */}
                <div className={`absolute inset-0 rounded-full blur-md opacity-50 ${
                  darkMode ? 'bg-yellow-400' : 'bg-blue-400'
                } animate-pulse`} />
              </div>
            </button>
            
            {/* Login/User section with enhanced styling */}
            {!isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(true)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 overflow-hidden group ${
                  darkMode
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/25'
                }`}
              >
                <span className="relative z-10">Login</span>
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            ) : (
              <div className={`flex items-center space-x-3 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                darkMode ? 'bg-white/10 border border-purple-500/20' : 'bg-gray-100/50 border border-blue-500/20'
              }`}>
                <div className={`w-2 h-2 rounded-full animate-pulse ${
                  userRole === 'admin' ? 'bg-green-400' : 'bg-blue-400'
                }`} />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {userRole === 'admin' ? 'Admin' : 'Guest'}
                </span>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-sm text-red-500 hover:text-red-400 transition-colors duration-200 font-medium"
                >
                  Logout
                </button>
              </div>
            )}
            
            {/* Mobile menu button with enhanced animation */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  darkMode 
                    ? 'text-gray-300 hover:text-white bg-white/10 hover:bg-white/20' 
                    : 'text-gray-700 hover:text-gray-900 bg-gray-100/50 hover:bg-gray-200/50'
                } backdrop-blur-sm`}
              >
                <div className="relative">
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
                  ) : (
                    <Menu className="h-6 w-6 transition-transform duration-300 rotate-0" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div className={`md:hidden transform transition-all duration-300 ease-out ${
        mobileMenuOpen 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0 pointer-events-none'
      } ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-xl border-t ${
        darkMode ? 'border-purple-500/20' : 'border-blue-500/20'
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {['home', 'menu', 'rooms', 'amenities', 'gallery', 'contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => {
                setCurrentPage(item);
                setMobileMenuOpen(false);
              }}
              className={`block px-4 py-3 rounded-xl text-base font-medium capitalize w-full text-left transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                currentPage === item
                  ? darkMode 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : darkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/80'
              } backdrop-blur-sm`}
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: mobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { transform: translateX(0%); }
          50% { transform: translateX(100%); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};



   const HeroSection = () => (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-40 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.3) contrast(1.2) saturate(1.1)'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
      </div>


      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Logo/Brand */}
          <div className={`mb-8 transform transition-all duration-1500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-4 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white/70 text-sm font-light uppercase tracking-[0.2em]">Est. 1995</span>
            </div>
          </div>

          {/* Main Title */}
          <div className={`mb-12 transform transition-all duration-1500 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h1 className="text-7xl md:text-9xl font-thin text-white mb-6 tracking-tight leading-none">
              BELLA
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-extralight">
                VISTA
              </span>
            </h1>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"></div>
          </div>

          {/* Subtitle */}
          <div className={`mb-16 transform transition-all duration-1500 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
              An extraordinary fusion of culinary artistry and luxurious hospitality, 
              where every moment becomes an unforgettable experience.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`mb-20 transform transition-all duration-1500 delay-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => setShowBookingForm(true)}
                className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Reserve Experience</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="group flex items-center space-x-3 px-8 py-4 border border-white/20 rounded-full text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <Play className="w-5 h-5 ml-0.5" />
                </div>
                <span className="font-light">Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Image Navigation */}
          <div className={`flex justify-center space-x-4 transform transition-all duration-1500 delay-900 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`group relative w-16 h-1 rounded-full transition-all duration-500 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-110' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              >
                {index === currentImageIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
    </div>
  );

  const MenuSection = () => (
  <section className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100'}`}>
  {/* Background Pattern */}
  <div className={`absolute inset-0 ${darkMode ? 'bg-[radial-gradient(circle_at_30%_70%,_rgba(59,130,246,0.05),_transparent_50%)]' : 'bg-[radial-gradient(circle_at_20%_80%,_rgba(251,146,60,0.03),_transparent_50%)]'}`}></div>
  <div className={`absolute inset-0 ${darkMode ? 'bg-[radial-gradient(circle_at_70%_30%,_rgba(139,92,246,0.05),_transparent_50%)]' : 'bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.8),_transparent_50%)]'}`}></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-20">
      <div className="inline-block mb-6">
        <h2 className={`text-5xl font-extrabold mb-3 tracking-tight leading-tight ${darkMode 
          ? 'bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent' 
          : 'bg-gradient-to-r from-slate-800 via-orange-700 to-red-700 bg-clip-text text-transparent'}`}>
          Our Menu
        </h2>
        <div className={`h-1 w-24 mx-auto rounded-full ${darkMode 
          ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
          : 'bg-gradient-to-r from-orange-500 to-red-500'}`}></div>
      </div>
      <p className={`text-xl font-medium leading-relaxed max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
        Carefully curated dishes made with the finest ingredients
      </p>
    </div>

    {menuItems.map((category, categoryIndex) => (
      <div key={categoryIndex} className="mb-16 last:mb-0">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h3 className={`text-3xl font-bold mb-4 ${darkMode 
            ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
            : 'bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'}`}>
            {category.category}
          </h3>
          <div className={`h-0.5 w-16 mx-auto rounded-full ${darkMode 
            ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
            : 'bg-gradient-to-r from-orange-400 to-red-400'}`}></div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {category.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 transform-gpu ${darkMode 
                ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/50' 
                : 'bg-white/80 backdrop-blur-sm border border-white/20'}`}
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl ${darkMode 
                ? 'bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10' 
                : 'bg-gradient-to-r from-orange-500/10 via-transparent to-red-500/10'}`}></div>
              
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Floating Price Badge */}
                <div className={`absolute top-6 right-6 px-4 py-2 rounded-2xl text-sm font-bold backdrop-blur-md border shadow-lg transition-all duration-300 ${darkMode 
                  ? 'bg-gray-900/90 text-blue-400 border-blue-500/30 shadow-blue-500/20' 
                  : 'bg-white/90 text-orange-600 border-orange-200/50 shadow-orange-200/50'}`}>
                  {item.price}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="relative p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className={`text-2xl font-bold leading-tight transition-colors duration-300 ${darkMode 
                    ? 'text-white group-hover:text-blue-400' 
                    : 'text-slate-800 group-hover:text-orange-700'}`}>
                    {item.name}
                  </h4>
                </div>
                
                <p className={`text-base font-medium leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                  {item.description}
                </p>

                {/* Decorative Element */}
                <div className={`mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20 ${darkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                  : 'bg-gradient-to-r from-orange-500 to-red-500'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
);


 const AboutSection = () => (
    <section className="relative py-32 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-white/60 text-sm uppercase tracking-wider">Our Legacy</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-thin text-white mb-6">
            Crafting
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-light">
              Excellence
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-white/70 font-light leading-relaxed">
                Since 1995, Bella Vista has redefined the boundaries of culinary excellence and luxury hospitality. 
                Our journey began with a simple vision: to create spaces where extraordinary experiences unfold naturally.
              </p>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                Today, we stand as a testament to unwavering dedication, where every dish tells a story, 
                every room whispers comfort, and every moment becomes a cherished memory.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {[
                { number: '29', label: 'Years of Excellence', suffix: '+' },
                { number: '50', label: 'Luxury Suites', suffix: '+' },
                { number: '25', label: 'International Awards', suffix: '+' },
                { number: '4.9', label: 'Guest Rating', suffix: '/5' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-light text-white mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      {stat.number}
                    </span>
                    <span className="text-white/60">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-white/50 font-light uppercase tracking-wider leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Luxury Restaurant Interior"
                  className="w-full h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                    <h3 className="text-white text-xl font-light mb-2">Private Dining</h3>
                    <p className="text-white/70 text-sm">Intimate spaces for unforgettable moments</p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 backdrop-blur-xl border border-white/20 transform group-hover:-translate-y-2 transition-all duration-500">
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">★★★</div>
                  <div className="text-white text-sm font-light">Michelin Guide</div>
                  <div className="text-white/70 text-xs">Featured Restaurant</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  );
  
  
  const RoomsSection = () => (
  <section className="relative py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.03),_transparent_50%)]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.8),_transparent_50%)]"></div>
  
  <div className="relative max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-slate-800 via-slate-700 to-blue-800 bg-clip-text text-transparent mb-2 tracking-tight leading-tight">
          Luxury Rooms
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
      </div>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
        Experience comfort and elegance in our carefully designed accommodations
      </p>
    </div>
    
    {/* Rooms Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
      {rooms.map((room) => (
        <div key={room.id} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:-translate-y-3 hover:rotate-1 transform-gpu">
          {/* Card Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-t-3xl">
            <img 
              src={room.image} 
              alt={room.name}
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            
            {/* Availability Badge */}
            <div className={`absolute top-6 right-6 px-4 py-2 rounded-2xl text-sm font-bold backdrop-blur-md border shadow-lg transition-all duration-300 ${
              room.available 
                ? 'bg-emerald-100/90 text-emerald-800 border-emerald-200/50 shadow-emerald-200/50' 
                : 'bg-red-100/90 text-red-800 border-red-200/50 shadow-red-200/50'
            }`}>
              {room.available ? '✓ Available' : '✕ Booked'}
            </div>
          </div>
          
          {/* Content Section */}
          <div className="relative p-8">
            {/* Title & Price */}
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                {room.name}
              </h3>
              <div className="text-right ml-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  {room.price}
                </span>
                <div className="text-xs text-slate-500 font-medium">per night</div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-slate-600 mb-6 leading-relaxed text-base font-medium">
              {room.description}
            </p>
            
            {/* Amenities */}
            <div className="flex flex-wrap gap-2 mb-8">
              {room.amenities.map((amenity, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 rounded-2xl text-sm font-semibold hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-300 border border-slate-200/50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  {amenity}
                </span>
              ))}
            </div>
            
            {/* Book Button */}
            <button 
              className={`relative w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform overflow-hidden ${
                room.available
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-gradient-to-r from-slate-200 to-slate-300 text-slate-500 cursor-not-allowed shadow-inner'
              }`}
              disabled={!room.available}
            >
              {room.available && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              )}
              <span className="relative z-10">
                {room.available ? 'Book Room Now' : 'Currently Unavailable'}
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );

  const AmenitiesSection = () => (
  <section className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100'}`}>
  {/* Background Pattern */}
  <div className={`absolute inset-0 ${darkMode ? 'bg-[radial-gradient(circle_at_25%_75%,_rgba(99,102,241,0.05),_transparent_50%)]' : 'bg-[radial-gradient(circle_at_20%_80%,_rgba(99,102,241,0.03),_transparent_50%)]'}`}></div>
  <div className={`absolute inset-0 ${darkMode ? 'bg-[radial-gradient(circle_at_75%_25%,_rgba(168,85,247,0.05),_transparent_50%)]' : 'bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.8),_transparent_50%)]'}`}></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-20">
      <div className="inline-block mb-6">
        <h2 className={`text-5xl font-extrabold mb-3 tracking-tight leading-tight ${darkMode 
          ? 'bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent' 
          : 'bg-gradient-to-r from-slate-800 via-indigo-700 to-purple-700 bg-clip-text text-transparent'}`}>
          World-Class Amenities
        </h2>
        <div className={`h-1 w-32 mx-auto rounded-full ${darkMode 
          ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
          : 'bg-gradient-to-r from-indigo-500 to-purple-500'}`}></div>
      </div>
      <p className={`text-xl font-medium leading-relaxed max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
        Enjoy premium facilities designed for your comfort and entertainment
      </p>
    </div>

    {/* Amenities Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
      {amenities.map((amenity, index) => {
        const IconComponent = amenity.icon;
        return (
          <div 
            key={index} 
            className={`group relative text-center p-8 rounded-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 transform-gpu shadow-xl hover:shadow-2xl ${darkMode 
              ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/50' 
              : 'bg-white/80 backdrop-blur-sm border border-white/20'}`}
          >
            {/* Card Glow Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl ${darkMode 
              ? 'bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10' 
              : 'bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10'}`}></div>
            
            {/* Icon Container */}
            <div className="relative mb-6">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 shadow-lg ${darkMode 
                ? 'bg-gradient-to-br from-indigo-600 to-purple-600 shadow-indigo-500/25' 
                : 'bg-gradient-to-br from-indigo-100 to-purple-100 shadow-indigo-200/50'}`}>
                <IconComponent className={`w-10 h-10 transition-colors duration-300 ${darkMode 
                  ? 'text-white group-hover:text-indigo-100' 
                  : 'text-indigo-600 group-hover:text-purple-600'}`} />
              </div>
              
              {/* Floating Accent */}
              <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${darkMode 
                ? 'bg-gradient-to-r from-indigo-400 to-purple-400' 
                : 'bg-gradient-to-r from-indigo-400 to-purple-400'}`}></div>
            </div>
            
            {/* Content */}
            <div className="relative">
              <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${darkMode 
                ? 'text-white group-hover:text-indigo-300' 
                : 'text-slate-800 group-hover:text-indigo-700'}`}>
                {amenity.name}
              </h3>
              <p className={`text-base font-medium leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                {amenity.description}
              </p>
              
              {/* Decorative Element */}
              <div className={`mt-6 h-1 w-8 mx-auto rounded-full transition-all duration-300 group-hover:w-16 ${darkMode 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-500'}`}></div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
  );

  const GallerySection = () => (
   <section className={`py-24 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-20">
      <h2 className={`text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
        Gallery
      </h2>
      <div className={`w-24 h-1 mx-auto mb-6 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'} rounded-full`}></div>
      <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        A glimpse into our beautiful spaces and culinary artistry
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {galleryImages.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1">
          <img
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
          <div className={`absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${darkMode ? 'text-white' : 'text-white'}`}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                Gallery {index + 1}
              </span>
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
            <div className={`w-3 h-3 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'} rounded-full animate-pulse`}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );

  const TestimonialsSection = () => (
    <section className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900' : 'bg-gradient-to-br from-white via-gray-50 to-white'}`}>
  {/* Background decoration */}
  <div className="absolute inset-0 opacity-10">
    <div className={`absolute top-20 left-10 w-32 h-32 ${darkMode ? 'bg-blue-500' : 'bg-blue-400'} rounded-full blur-3xl`}></div>
    <div className={`absolute bottom-20 right-10 w-40 h-40 ${darkMode ? 'bg-purple-500' : 'bg-purple-400'} rounded-full blur-3xl`}></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-20">
      <h2 className={`text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} tracking-tight leading-tight`}>
        What Our Guests Say
      </h2>
      <div className={`w-32 h-1 mx-auto mb-6 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'} rounded-full`}></div>
      <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Real experiences from our valued customers
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className={`group relative p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
            darkMode 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50' 
              : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-400/50'
          }`}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full rounded-2xl"></div>
          
          {/* Quote icon */}
          <div className={`absolute -top-4 -left-4 w-12 h-12 ${darkMode ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-500'} rounded-full flex items-center justify-center shadow-lg`}>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          <div className="flex items-center mb-6 relative z-10">
            <div className="relative">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-5 object-cover border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${darkMode ? 'bg-green-400' : 'bg-green-500'} rounded-full border-2 border-white flex items-center justify-center`}>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className={`font-bold text-lg mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {testimonial.name}
              </h4>
              <div className="flex mb-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" />
                ))}
              </div>
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Verified Customer
              </span>
            </div>
          </div>
          
          <blockquote className={`text-base leading-relaxed italic relative z-10 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            "{testimonial.text}"
          </blockquote>

          {/* Background pattern */}
          <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );

const Booking = () => (
  <section className="p-10 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 min-h-screen flex items-center">
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
        Book a Table or Room
      </h2>
      <form className="max-w-2xl mx-auto space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
        <div className="space-y-6">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 group-hover:border-blue-300" 
            />
          </div>
          
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 group-hover:border-blue-300" 
            />
          </div>
          
          <div className="relative group">
            <select className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 group-hover:border-blue-300 cursor-pointer">
              <option>Table</option>
              <option>Room</option>
            </select>
          </div>
          
          <div className="relative group">
            <input 
              type="date" 
              className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 group-hover:border-blue-300" 
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:scale-[1.02] focus:ring-4 focus:ring-blue-500/30 focus:outline-none transition-all duration-300 transform active:scale-[0.98]"
        >
          Book Now
        </button>
      </form>
    </div>
  </section>
);
    
 return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar />
      <main className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        {currentPage === 'home' && (
          <>
            <HeroSection />
            <AboutSection />
            < MenuSection  />
            <RoomsSection />
            <AmenitiesSection />
            <GallerySection />
            <TestimonialsSection />
            <Booking/>
          </>
        )}
        {currentPage === 'menu' && <MenuSection />}
        {currentPage === 'rooms' && <RoomsSection />}
        {currentPage === 'amenities' && <AmenitiesSection />}
        {currentPage === 'gallery' && <GallerySection />}
        {currentPage === 'contact' && (
          <section className="py-20 text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <link rel="stylesheet" href="" /><p>Email: contact@bellavista.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Sunset Blvd, Paradise City</p>
          </section>
        )}
        {showBookingForm && <BookingForm />}
        
      </main>

      <footer className="relative z-10 py-20 border-t border-white/20 overflow-hidden">
  {/* Enhanced background effects */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black"></div>
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
  
  {/* Animated background elements */}
  <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
  
  {/* Floating particles */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-ping`}
        style={{
          left: `${20 + (i * 15)}%`,
          top: `${30 + (i * 10)}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: '3s'
        }}
      ></div>
    ))}
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-12 md:mb-0 text-center md:text-left group">
        <h3 className="text-6xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-200 hover:via-blue-300 hover:to-purple-300 transition-all duration-500 transform group-hover:scale-105">
          Restaurents
        </h3>
        <p className="text-gray-300 text-xl leading-relaxed max-w-md">
          Your gateway to the <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold">Mediterranean paradise</span>
        </p>
        
        {/* Decorative line */}
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-4 mx-auto md:mx-0 group-hover:w-48 transition-all duration-500"></div>
      </div>
      
      <div className="flex space-x-4">
        {[
          {
            icon: Facebook,
            color: 'hover:bg-blue-600 hover:shadow-blue-600/50',
            label: 'Facebook',
            href: 'https://facebook.com',
          },
          {
            icon: Instagram,
            color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:shadow-purple-600/50',
            label: 'Instagram',
            href: 'https://instagram.com',
          },
          {
            icon: Twitter,
            color: 'hover:bg-blue-400 hover:shadow-blue-400/50',
            label: 'Twitter',
            href: 'https://twitter.com',
          },
          {
            icon: MessageCircle,
            color: 'hover:bg-green-500 hover:shadow-green-500/50', 
            label: 'WhatsApp',
            href: 'https://wa.me', 
          },
          {
            icon: Send,
            color: 'hover:bg-cyan-400 hover:shadow-cyan-400/50',
            label: 'Telegram',
            href: 'https://t.me', 
          }
        ].map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`relative p-5 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl transform transition-all duration-500 hover:scale-125 hover:-translate-y-2 ${social.color} hover:shadow-2xl group overflow-hidden`}
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
              
              <IconComponent 
                size={32} 
                className="relative z-10 text-white group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-lg" 
              />
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping"></div>
              </div>
            </a>
          );
        })}
      </div>  
    </div>
    
    <div className="border-t border-gradient-to-r from-transparent via-white/20 to-transparent pt-12 mt-16 text-center relative">
      {/* Decorative elements */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
      
      <p className="text-gray-300 text-lg leading-relaxed">
        © 2025 <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">GOWTHAM HOTEL GROUPS</span>. All rights reserved. | 
        <span className="ml-2">Discover the magic of Gyllo Trep</span> 
        <span className="font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text ml-1">Travel</span> 
        <span className="inline-block animate-pulse ml-2">✨</span>
      </p>
      
      {/* Additional decorative touch */}
      <div className="mt-6 flex justify-center space-x-8 text-gray-500 text-sm">
        <span className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Privacy Policy</span>
        <span className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Terms of Service</span>
        <span className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Contact Us</span>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}
export default App;