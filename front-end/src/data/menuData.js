const menuItems = [
    {
      category: 'Appetizers',
      items: [
        {
          name: 'Truffle Arancini',
          price: '$18',
          description: 'Crispy risotto balls filled with truffle and parmesan, served with garlic aioli',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
          rating: 4.8,
          time: '15 min',
          isPopular: true,
          isSignature: false,
          tags: ['Vegetarian', 'Premium']
        },
        {
          name: 'Seared Scallops',
          price: '$24',
          description: 'Pan-seared scallops with cauliflower puree and pancetta crisps',
          image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop',
          rating: 4.9,
          time: '12 min',
          isPopular: false,
          isSignature: true,
          tags: ['Seafood', 'Gluten-Free']
        },
        {
          name: 'Burrata Caprese',
          price: '$16',
          description: 'Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic',
          image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&h=300&fit=crop',
          rating: 4.7,
          time: '8 min',
          isPopular: true,
          isSignature: false,
          tags: ['Vegetarian', 'Fresh']
        },
        {
          name: 'Duck Confit Spring Rolls',
          price: '$22',
          description: 'Crispy spring rolls filled with duck confit, served with plum sauce',
          image: 'https://images.unsplash.com/photo-1563379091639-cdcb3c999d14?w=400&h=300&fit=crop',
          rating: 4.6,
          time: '18 min',
          isPopular: false,
          isSignature: false,
          tags: ['Asian Fusion', 'Crispy']
        },
        {
          name: 'Oysters Rockefeller',
          price: '$28',
          description: 'Fresh oysters baked with spinach, herbs, and hollandaise sauce',
          image: 'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=400&h=300&fit=crop',
          rating: 4.5,
          time: '14 min',
          isPopular: false,
          isSignature: false,
          tags: ['Seafood', 'Classic']
        }
      ]
    },
    {
      category: 'Main Courses',
      items: [
        {
          name: 'Wagyu Beef Tenderloin',
          price: '$65',
          description: 'Premium wagyu with roasted vegetables and red wine jus',
          image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
          rating: 4.9,
          time: '25 min',
          isPopular: true,
          isSignature: true,
          tags: ['Premium', 'Signature']
        },
        {
          name: 'Wild Salmon',
          price: '$32',
          description: 'Grilled salmon with quinoa pilaf and lemon herb butter',
          image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
          rating: 4.7,
          time: '18 min',
          isPopular: false,
          isSignature: false,
          tags: ['Healthy', 'Seafood']
        },
        {
          name: 'Lobster Thermidor',
          price: '$58',
          description: 'Whole lobster with creamy cognac sauce and gruyere cheese',
          image: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=300&fit=crop',
          rating: 4.8,
          time: '35 min',
          isPopular: true,
          isSignature: true,
          tags: ['Seafood', 'Luxury']
        },
        {
          name: 'Rack of Lamb',
          price: '$45',
          description: 'Herb-crusted lamb with ratatouille and mint jus',
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
          rating: 4.6,
          time: '28 min',
          isPopular: false,
          isSignature: false,
          tags: ['Classic', 'Herbs']
        },
        {
          name: 'Mushroom Wellington',
          price: '$38',
          description: 'Portobello and wild mushroom wellington with truffle sauce',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
          rating: 4.5,
          time: '30 min',
          isPopular: false,
          isSignature: false,
          tags: ['Vegetarian', 'Truffle']
        },
        {
          name: 'Duck à l\'Orange',
          price: '$42',
          description: 'Roasted duck breast with orange glaze and wild rice',
          image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&h=300&fit=crop',
          rating: 4.7,
          time: '32 min',
          isPopular: true,
          isSignature: false,
          tags: ['French', 'Classic']
        }
      ]
    },
    {
      category: 'Desserts',
      items: [
        {
          name: 'Chocolate Lava Cake',
          price: '$14',
          description: 'Warm chocolate cake with molten center, vanilla ice cream and berry coulis',
          image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop',
          rating: 4.9,
          time: '12 min',
          isPopular: true,
          isSignature: true,
          tags: ['Chocolate', 'Warm']
        },
        {
          name: 'Crème Brûlée',
          price: '$12',
          description: 'Classic vanilla custard with caramelized sugar and fresh berries',
          image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=400&h=300&fit=crop',
          rating: 4.8,
          time: '5 min',
          isPopular: true,
          isSignature: false,
          tags: ['Classic', 'Creamy']
        },
        {
          name: 'Tiramisu',
          price: '$13',
          description: 'Traditional Italian dessert with mascarpone, coffee, and cocoa',
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
          rating: 4.7,
          time: '8 min',
          isPopular: false,
          isSignature: false,
          tags: ['Italian', 'Coffee']
        },
        {
          name: 'Macaroon Tower',
          price: '$16',
          description: 'Assorted French macaroons with seasonal flavors and gold leaf',
          image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
          rating: 4.6,
          time: '3 min',
          isPopular: false,
          isSignature: false,
          tags: ['French', 'Colorful']
        },
        {
          name: 'Chocolate Soufflé',
          price: '$18',
          description: 'Light and airy chocolate soufflé with Grand Marnier sauce',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
          rating: 4.8,
          time: '25 min',
          isPopular: false,
          isSignature: true,
          tags: ['Chocolate', 'Airy']
        },
        {
          name: 'Strawberry Cheesecake',
          price: '$11',
          description: 'New York style cheesecake with fresh strawberries and graham crust',
          image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
          rating: 4.5,
          time: '6 min',
          isPopular: true,
          isSignature: false,
          tags: ['Fruity', 'Creamy']
        }
      ]
    }
  ];

  const toggleFavorite = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    const newFavorites = new Set(favorites);
    if (newFavorites.has(key)) {
      newFavorites.delete(key);
    } else {
      newFavorites.add(key);
    }
    setFavorites(newFavorites);
  };

  const categories = ['All', ...menuItems.map(cat => cat.category)];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(cat => cat.category === selectedCategory);

  
    <section className={`relative min-h-screen transition-all duration-700 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50'
    }`}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-pulse ${
              darkMode ? 'bg-purple-500/10' : 'bg-orange-300/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              borderRadius: '50%',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Luxury Header */}
        <div className="text-center mb-24">
          <div className="relative inline-block mb-8">
            <div className={`absolute inset-0 blur-2xl ${
              darkMode ? 'bg-purple-500/30' : 'bg-orange-400/30'
            } rounded-full animate-pulse`}></div>
            <div className="relative bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 p-6 rounded-full shadow-2xl">
              <ChefHat className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className={`text-7xl md:text-8xl font-black mb-8 tracking-tight ${
            darkMode 
              ? 'bg-gradient-to-r from-white via-purple-200 to-pink-200' 
              : 'bg-gradient-to-r from-gray-900 via-orange-800 to-red-800'
          } bg-clip-text text-transparent`}>
            CULINARY
          </h1>
          
          <h2 className={`text-4xl md:text-5xl font-light mb-8 ${
            darkMode ? 'text-purple-200' : 'text-orange-700'
          }`}>
            Excellence
          </h2>
          
          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Where every dish tells a story of passion, precision, and unparalleled flavor
          </p>

          {/* Elegant Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              ☀️
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
              style={{
                background: darkMode 
                  ? 'linear-gradient(45deg, #6366f1, #8b5cf6)' 
                  : 'linear-gradient(45deg, #f59e0b, #f97316)'
              }}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform duration-300 ${
                darkMode ? 'translate-x-9' : 'translate-x-1'
              }`}></div>
            </button>
            <span className={`text-lg font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              🌙
            </span>
          </div>

          {/* Premium Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white shadow-2xl scale-105'
                    : darkMode
                      ? 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-600/50'
                      : 'bg-white/80 text-gray-700 hover:bg-white hover:text-gray-900 shadow-lg border border-orange-200/50'
                } backdrop-blur-sm hover:shadow-2xl`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Premium Menu Grid */}
        {filteredItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-16">
              <h3 className={`text-5xl md:text-6xl font-bold mb-6 ${
                darkMode 
                  ? 'bg-gradient-to-r from-white to-purple-200' 
                  : 'bg-gradient-to-r from-gray-900 to-orange-800'
              } bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
                <Sparkles className="w-6 h-6 text-orange-500" />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-500"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:-translate-y-4 ${
                    darkMode 
                      ? 'bg-slate-800/40 backdrop-blur-xl border border-slate-700/50' 
                      : 'bg-white/60 backdrop-blur-xl border border-orange-200/30'
                  } shadow-2xl hover:shadow-3xl`}
                >
                  {/* Premium Badges */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    {item.isPopular && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        <Flame className="w-3 h-3" />
                        Popular
                      </div>
                    )}
                    {item.isSignature && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        <Award className="w-3 h-3" />
                        Signature
                      </div>
                    )}
                  </div>

                  {/* Luxury Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(categoryIndex, itemIndex)}
                    className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${
                        favorites.has(`${categoryIndex}-${itemIndex}`)
                          ? 'fill-red-500 text-red-500 scale-110'
                          : 'text-white hover:text-red-300'
                      }`}
                    />
                  </button>

                  {/* Premium Image with Overlay */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Luxury Content */}
                  <div className="p-8">
                    {/* Premium Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                            darkMode
                              ? 'bg-slate-700/70 text-slate-300 hover:bg-slate-600'
                              : 'bg-orange-100/70 text-orange-700 hover:bg-orange-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title and Price */}
                    <div className="flex justify-between items-start mb-4">
                      <h4 className={`text-2xl font-bold leading-tight ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.name}
                      </h4>
                      <span className="text-3xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                        {item.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className={`text-base mb-6 leading-relaxed ${
                      darkMode ? 'text-slate-300' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>

                    {/* Rating and Time */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(item.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className={`text-sm font-semibold ${
                          darkMode ? 'text-slate-300' : 'text-gray-700'
                        }`}>
                          {item.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className={`w-4 h-4 ${
                          darkMode ? 'text-slate-400' : 'text-gray-500'
                        }`} />
                        <span className={`text-sm font-medium ${
                          darkMode ? 'text-slate-400' : 'text-gray-500'
                        }`}>
                          {item.time}
                        </span>
                      </div>
                    </div>

                    {/* Premium Order Button */}
                    <button className="w-full py-4 rounded-2xl font-bold text-lg transition-all duration-500 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white hover:from-amber-500 hover:via-orange-600 hover:to-red-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95">
                      <span className="flex items-center justify-center gap-2">
                        Add to Order
                        <Sparkles className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    export default menuItems;