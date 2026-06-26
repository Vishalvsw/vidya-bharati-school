import React, { useState } from 'react';
import { 
  DocumentDuplicateIcon, 
  CloudArrowUpIcon, 
  EyeIcon, 
  ArrowDownTrayIcon, 
  TrashIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const Documents = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Aadhar Card', uploaded: '2024-12-01', status: 'Verified' },
    { id: 2, name: 'Birth Certificate', uploaded: '2024-12-01', status: 'Pending' },
    { id: 3, name: 'Previous Marks Card', uploaded: '2024-12-02', status: 'Verified' },
    { id: 4, name: 'Passport Photo', uploaded: '2024-12-03', status: 'Pending' },
    { id: 5, name: 'Medical Certificate', uploaded: '2024-12-04', status: 'Verified' }
  ]);

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [documentType, setDocumentType] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Verified': return <CheckCircleIcon className="h-4 w-4 text-green-500" />;
      case 'Pending': return <ClockIcon className="h-4 w-4 text-yellow-500" />;
      default: return <XCircleIcon className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Verified': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-red-100 text-red-700';
    }
  };

  const handleUpload = () => {
    if (!documentType || !selectedFile) {
      toast.error('Please select document type and file');
      return;
    }
    const newDoc = {
      id: documents.length + 1,
      name: documentType,
      uploaded: new Date().toISOString().split('T')[0],
      status: 'Pending'
    };
    setDocuments([...documents, newDoc]);
    setShowUploadModal(false);
    setDocumentType('');
    setSelectedFile(null);
    toast.success('Document uploaded successfully!');
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this document?')) {
      setDocuments(documents.filter(d => d.id !== id));
      toast.success('Document deleted!');
    }
  };

  const handleView = (name) => {
    toast.success(`Viewing: ${name}`);
  };

  const handleDownload = (name) => {
    toast.success(`Downloading: ${name}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">📄 My Documents</h2>
          <p className="text-sm text-gray-500">Manage your documents</p>
        </div>
        <button
          onClick={() => setShowUploadModal(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition flex items-center gap-2"
        >
          <CloudArrowUpIcon className="h-4 w-4" />
          Upload Document
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
          <p className="text-sm text-gray-600">Total Documents</p>
          <p className="text-2xl font-bold text-blue-700">{documents.length}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-3 border border-green-200">
          <p className="text-sm text-gray-600">Verified</p>
          <p className="text-2xl font-bold text-green-700">
            {documents.filter(d => d.status === 'Verified').length}
          </p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-200">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-yellow-700">
            {documents.filter(d => d.status === 'Pending').length}
          </p>
        </div>
      </div>

      {/* Document List */}
      <div className="grid md:grid-cols-2 gap-4">
        {documents.map((doc) => (
          <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 rounded-xl">
                <DocumentDuplicateIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{doc.name}</p>
                <p className="text-xs text-gray-400">Uploaded: {doc.uploaded}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(doc.status)}`}>
                {getStatusIcon(doc.status)} {doc.status}
              </span>
              <button
                onClick={() => handleView(doc.name)}
                className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition"
              >
                <EyeIcon className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDownload(doc.name)}
                className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDelete(doc.id)}
                className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">📤 Upload Document</h3>
              <button onClick={() => setShowUploadModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Document Type *</label>
                <select
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Type</option>
                  <option value="Aadhar Card">Aadhar Card</option>
                  <option value="Birth Certificate">Birth Certificate</option>
                  <option value="Marks Card">Marks Card</option>
                  <option value="Passport Photo">Passport Photo</option>
                  <option value="Medical Certificate">Medical Certificate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Choose File *</label>
                <input
                  type="file"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleUpload}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition"
              >
                Upload Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;
