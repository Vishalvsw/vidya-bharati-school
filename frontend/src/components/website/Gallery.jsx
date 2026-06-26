// src/components/website/Gallery.jsx
import React, { useState } from 'react';
import { 
  XMarkIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  PhotoIcon,
  FolderIcon,
  CameraIcon,
  UserGroupIcon,
  CalendarIcon,
  BuildingLibraryIcon,
  HeartIcon,
  ShareIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid | list
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All', icon: PhotoIcon, count: 0 },
    { id: 'campus', label: 'Campus', icon: BuildingLibraryIcon, count: 0 },
    { id: 'students', label: 'Students', icon: UserGroupIcon, count: 0 },
    { id: 'events', label: 'Events', icon: CalendarIcon, count: 0 },
    { id: 'activities', label: 'Activities', icon: CameraIcon, count: 0 }
  ];

  const images = [
    { id: 1, category: 'campus', title: 'School Building', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop', description: 'Our beautiful campus building with modern architecture', date: '2024-01-15' },
    { id: 2, category: 'campus', title: 'Smart Classroom', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop', description: 'Digital smart classrooms with interactive learning', date: '2024-01-20' },
    { id: 3, category: 'campus', title: 'Library', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop', description: 'Well-stocked library with 15,000+ books', date: '2024-02-01' },
    { id: 4, category: 'campus', title: 'Playground', image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&h=600&fit=crop', description: 'Spacious playground for outdoor activities', date: '2024-02-10' },
    { id: 5, category: 'students', title: 'Students in Class', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop', description: 'Engaged students in interactive learning sessions', date: '2024-02-15' },
    { id: 6, category: 'students', title: 'Group Study', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&h=600&fit=crop', description: 'Collaborative group study and peer learning', date: '2024-02-20' },
    { id: 7, category: 'students', title: 'Student Activities', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop', description: 'Extracurricular activities and student engagement', date: '2024-03-01' },
    { id: 8, category: 'events', title: 'Annual Day Celebration', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop', description: 'Annual day celebration with cultural performances', date: '2024-03-10' },
    { id: 9, category: 'events', title: 'Sports Day', image: 'https://images.unsplash.com/photo-1461896836934-bdd6e0e2c5c6?w=800&h=600&fit=crop', description: 'Sports day with various athletic competitions', date: '2024-03-15' },
    { id: 10, category: 'events', title: 'Cultural Event', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop', description: 'Cultural celebrations and traditional performances', date: '2024-03-20' },
    { id: 11, category: 'activities', title: 'Art Class', image: 'https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=800&h=600&fit=crop', description: 'Creative art and painting sessions', date: '2024-04-01' },
    { id: 12, category: 'activities', title: 'Science Lab', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop', description: 'Hands-on science experiments in the lab', date: '2024-04-05' },
    { id: 13, category: 'activities', title: 'Music Class', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop', description: 'Music learning and performance sessions', date: '2024-04-10' }
  ];

  // Update category counts
  categories.forEach(cat => {
    if (cat.id === 'all') {
      cat.count = images.length;
    } else {
      cat.count = images.filter(img => img.category === cat.id).length;
    }
  });

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const handleDownload = (image) => {
    // Simulate download
    alert(`Downloading: ${image.title}`);
  };

  const handleShare = (image) => {
    if (navigator.share) {
      navigator.share({
        title: image.title,
        text: image.description,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
      });
    }
  };

  const filteredImages = images.filter(img => {
    const matchesCategory = activeCategory === 'all' || img.category === activeCategory;
    const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         img.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (index) => { 
    setCurrentIndex(index); 
    setSelectedImage(filteredImages[index]); 
  };
  
  const closeModal = () => setSelectedImage(null);
  
  const navigateImage = (direction) => { 
    const newIndex = currentIndex + direction; 
    if (newIndex >= 0 && newIndex < filteredImages.length) { 
      setCurrentIndex(newIndex); 
      setSelectedImage(filteredImages[newIndex]); 
    } 
  };

  const stats = {
    total: images.length,
    categories: categories.filter(c => c.id !== 'all').length,
    favorites: favorites.length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">📸 School Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore the vibrant life at Vidya Bharati School through our photo gallery.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <PhotoIcon className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">{stats.total}</span>
              <span className="text-gray-500">Total Photos</span>
            </div>
            <div className="flex items-center gap-2">
              <FolderIcon className="h-5 w-5 text-purple-600" />
              <span className="font-semibold">{stats.categories}</span>
              <span className="text-gray-500">Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartIcon className="h-5 w-5 text-red-500" />
              <span className="font-semibold">{stats.favorites}</span>
              <span className="text-gray-500">Favorites</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search & Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button 
                    key={category.id} 
                    onClick={() => setActiveCategory(category.id)} 
                    className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium transition ${
                      activeCategory === category.id 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {category.label}
                    <span className={`text-xs ${activeCategory === category.id ? 'text-blue-200' : 'text-gray-400'}`}>
                      ({category.count})
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                ⊞ Grid
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded-lg transition ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                ☰ List
              </button>
            </div>
          </div>

          {/* Image Grid */}
          {filteredImages.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-xl font-bold text-gray-800">No images found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => {
                const isFavorite = favorites.includes(image.id);
                return (
                  <div 
                    key={image.id} 
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
                    onClick={() => openModal(index)}
                  >
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={image.image} 
                        alt={image.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-bold text-lg">{image.title}</h3>
                          <p className="text-sm text-gray-300">{image.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{image.date}</p>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                        <button 
                          onClick={(e) => { e.stopPropagation(); toggleFavorite(image.id); }}
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition"
                        >
                          {isFavorite ? (
                            <HeartSolidIcon className="h-5 w-5 text-red-500" />
                          ) : (
                            <HeartIcon className="h-5 w-5 text-gray-600" />
                          )}
                        </button>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // List View
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Image</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Title</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Category</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredImages.map((image) => {
                    const isFavorite = favorites.includes(image.id);
                    return (
                      <tr key={image.id} className="hover:bg-gray-50 transition">
                        <td className="px-4 py-3">
                          <img src={image.image} alt={image.title} className="w-16 h-16 object-cover rounded-lg" />
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-800">{image.title}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full capitalize">
                            {image.category}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">{image.date}</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button 
                              onClick={() => toggleFavorite(image.id)}
                              className="p-1.5 hover:bg-gray-100 rounded-lg transition"
                            >
                              {isFavorite ? (
                                <HeartSolidIcon className="h-4 w-4 text-red-500" />
                              ) : (
                                <HeartIcon className="h-4 w-4 text-gray-400" />
                              )}
                            </button>
                            <button 
                              onClick={() => handleDownload(image)}
                              className="p-1.5 hover:bg-gray-100 rounded-lg transition"
                            >
                              <ArrowDownTrayIcon className="h-4 w-4 text-gray-600" />
                            </button>
                            <button 
                              onClick={() => handleShare(image)}
                              className="p-1.5 hover:bg-gray-100 rounded-lg transition"
                            >
                              <ShareIcon className="h-4 w-4 text-gray-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Results count */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Showing {filteredImages.length} of {images.length} images
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeModal} 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10 bg-black/50 p-2 rounded-full"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          
          <button 
            onClick={() => navigateImage(-1)} 
            className="absolute left-4 text-white hover:text-gray-300 transition z-10 disabled:opacity-50 bg-black/50 p-3 rounded-full"
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
          
          <button 
            onClick={() => navigateImage(1)} 
            className="absolute right-4 text-white hover:text-gray-300 transition z-10 disabled:opacity-50 bg-black/50 p-3 rounded-full"
            disabled={currentIndex === filteredImages.length - 1}
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>

          <div className="max-w-5xl w-full">
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="w-full max-h-[70vh] object-contain rounded-2xl" 
            />
            <div className="text-white text-center mt-6">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300 mt-2">{selectedImage.description}</p>
              <div className="flex justify-center gap-6 mt-4 text-sm text-gray-400">
                <span>📅 {selectedImage.date}</span>
                <span>📂 {selectedImage.category}</span>
                <span className="flex items-center gap-1">
                  {favorites.includes(selectedImage.id) ? (
                    <HeartSolidIcon className="h-4 w-4 text-red-500" />
                  ) : (
                    <HeartIcon className="h-4 w-4" />
                  )}
                  {favorites.includes(selectedImage.id) ? ' Favorited' : ' Favorite'}
                </span>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <button 
                  onClick={() => toggleFavorite(selectedImage.id)}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm font-medium transition backdrop-blur-sm"
                >
                  {favorites.includes(selectedImage.id) ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
                </button>
                <button 
                  onClick={() => handleDownload(selectedImage)}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm font-medium transition backdrop-blur-sm"
                >
                  ⬇️ Download
                </button>
                <button 
                  onClick={() => handleShare(selectedImage)}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm font-medium transition backdrop-blur-sm"
                >
                  🔗 Share
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                {currentIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;