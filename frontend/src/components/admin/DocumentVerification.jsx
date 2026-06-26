import React, { useState } from 'react';
import { 
  DocumentDuplicateIcon, 
  CheckCircleIcon, 
  XCircleIcon, 
  ClockIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  TrashIcon,
  UserCheckIcon,
  UserXIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const DocumentVerification = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      studentName: 'Rahul Sharma',
      studentId: 'STU-2024-001',
      documentType: 'Aadhar Card',
      uploaded: '2024-12-01',
      status: 'Pending',
      size: '245 KB',
      type: 'PDF',
      comments: ''
    },
    {
      id: 2,
      studentName: 'Priya Patel',
      studentId: 'STU-2024-002',
      documentType: 'Birth Certificate',
      uploaded: '2024-12-01',
      status: 'Pending',
      size: '180 KB',
      type: 'PDF',
      comments: ''
    },
    {
      id: 3,
      studentName: 'Amit Kumar',
      studentId: 'STU-2024-003',
      documentType: 'Marks Card',
      uploaded: '2024-12-02',
      status: 'Verified',
      size: '320 KB',
      type: 'PDF',
      comments: 'Document verified successfully'
    },
    {
      id: 4,
      studentName: 'Sneha Reddy',
      studentId: 'STU-2024-004',
      documentType: 'Passport Photo',
      uploaded: '2024-12-03',
      status: 'Rejected',
      size: '95 KB',
      type: 'Image',
      comments: 'Please upload a clear photo'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [verifyComment, setVerifyComment] = useState('');

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Verified':
        return <span className="flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold"><CheckCircleIcon className="h-4 w-4" /> Verified</span>;
      case 'Rejected':
        return <span className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-semibold"><XCircleIcon className="h-4 w-4" /> Rejected</span>;
      default:
        return <span className="flex items-center gap-1 px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold"><ClockIcon className="h-4 w-4" /> Pending</span>;
    }
  };

  const handleVerify = (doc, status) => {
    const updatedDocs = documents.map(d => {
      if (d.id === doc.id) {
        return {
          ...d,
          status: status,
          comments: status === 'Verified' ? verifyComment || 'Document verified successfully' : verifyComment || 'Document rejected',
          verifiedBy: 'Admin',
          verifiedDate: new Date().toISOString().split('T')[0]
        };
      }
      return d;
    });

    setDocuments(updatedDocs);
    setShowVerifyModal(false);
    setVerifyComment('');
    toast.success(`Document ${status} successfully!`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this document record?')) {
      setDocuments(documents.filter(d => d.id !== id));
      toast.success('Document record deleted!');
    }
  };

  const handleView = (doc) => {
    toast.info(`Viewing: ${doc.documentType} - ${doc.studentName}`);
  };

  const handleDownload = (doc) => {
    toast.success(`Downloading: ${doc.documentType}`);
  };

  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.documentType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || doc.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: documents.length,
    pending: documents.filter(d => d.status === 'Pending').length,
    verified: documents.filter(d => d.status === 'Verified').length,
    rejected: documents.filter(d => d.status === 'Rejected').length
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">📄 Document Verification</h2>
          <p className="text-sm text-gray-500">Verify student documents (Max size: 1MB)</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
          <p className="text-sm text-gray-600">Total</p>
          <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-200">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-yellow-700">{stats.pending}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-3 border border-green-200">
          <p className="text-sm text-gray-600">Verified</p>
          <p className="text-2xl font-bold text-green-700">{stats.verified}</p>
        </div>
        <div className="bg-red-50 rounded-xl p-3 border border-red-200">
          <p className="text-sm text-gray-600">Rejected</p>
          <p className="text-2xl font-bold text-red-700">{stats.rejected}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1 min-w-[200px] relative">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by student name, document type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Verified">Verified</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Student</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Document</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Size</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredDocs.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3">
                  <div>
                    <p className="font-semibold text-gray-800">{doc.studentName}</p>
                    <p className="text-xs text-gray-500">{doc.studentId}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <DocumentDuplicateIcon className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700">{doc.documentType}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{doc.uploaded}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{doc.size}</td>
                <td className="px-4 py-3">{getStatusBadge(doc.status)}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleView(doc)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="View">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDownload(doc)} className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition" title="Download">
                      <ArrowDownTrayIcon className="h-4 w-4" />
                    </button>
                    {doc.status === 'Pending' && (
                      <>
                        <button onClick={() => { setSelectedDoc(doc); setShowVerifyModal(true); setVerifyComment(''); }} className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition" title="Verify">
                          <CheckCircleIcon className="h-4 w-4" />
                        </button>
                      </>
                    )}
                    <button onClick={() => handleDelete(doc.id)} className="p-1.5 text-red-400 hover:bg-red-50 rounded-lg transition" title="Delete">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Showing {filteredDocs.length} of {documents.length} documents
      </div>

      {showVerifyModal && selectedDoc && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Verify Document</h3>
            <div className="space-y-4">
              <div><p className="text-sm text-gray-500">Student</p><p className="font-semibold text-gray-800">{selectedDoc.studentName}</p></div>
              <div><p className="text-sm text-gray-500">Document</p><p className="font-semibold text-gray-800">{selectedDoc.documentType}</p></div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Comments/Notes</label>
                <textarea value={verifyComment} onChange={(e) => setVerifyComment(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3" placeholder="Add verification notes..." />
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleVerify(selectedDoc, 'Verified')} className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2">
                  <CheckCircleIcon className="h-5 w-5" /> Verify
                </button>
                <button onClick={() => handleVerify(selectedDoc, 'Rejected')} className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2">
                  <XCircleIcon className="h-5 w-5" /> Reject
                </button>
              </div>
              <button onClick={() => setShowVerifyModal(false)} className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentVerification;
