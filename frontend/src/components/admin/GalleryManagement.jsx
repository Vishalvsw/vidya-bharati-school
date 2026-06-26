import React, { useState } from 'react';
import { PlusIcon, TrashIcon, PhotoIcon, FolderIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const GalleryManagement = () => {
  const [images, setImages] = useState([
    { id: 1, title: 'School Building', category: 'Campus', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop' },
    { id: 2, title: 'Library', category: 'Campus', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop' },
    { id: 3, title: 'Sports Day', category: 'Events', image: 'https://images.unsplash.com/photo-1461896836934-bdd6e0e2c5c6?w=400&h=300&fit=crop' }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newImage, setNewImage] = useState({ title: '', category: 'Campus', image: '' });

  const handleDelete = (id) => {
    if (window.confirm('Delete this image?')) {
      setImages(images.filter(i => i.id !== id));
      toast.success('Image deleted!');
    }
  };

  const handleAddImage = () => {
    if (!newImage.title || !newImage.image) {
      toast.error('Please fill all required fields');
      return;
    }
    const image = { id: images.length + 1, ...newImage };
    setImages([...images, image]);
    setShowAddModal(false);
    setNewImage({ title: '', category: 'Campus', image: '' });
    toast.success('Image added!');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">🖼️ Gallery Management</h2>
          <p className="text-sm text-gray-500">Manage school photo gallery</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition flex items-center gap-2">
          <PlusIcon className="h-4 w-4" /> Add Image
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-center group relative">
            <img src={image.image} alt={image.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="font-medium text-gray-800 mt-2">{image.title}</h3>
            <p className="text-sm text-gray-500">{image.category}</p>
            <button onClick={() => handleDelete(image.id)} className="absolute top-2 right-2 p-1.5 bg-red-100 text-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition">
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Add Image Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add Image</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Title *" value={newImage.title} onChange={(e) => setNewImage({...newImage, title: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="Image URL *" value={newImage.image} onChange={(e) => setNewImage({...newImage, image: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <select value={newImage.category} onChange={(e) => setNewImage({...newImage, category: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                <option value="Campus">Campus</option>
                <option value="Students">Students</option>
                <option value="Events">Events</option>
                <option value="Activities">Activities</option>
              </select>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition">Cancel</button>
              <button onClick={handleAddImage} className="flex-1 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">Add Image</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryManagement;
