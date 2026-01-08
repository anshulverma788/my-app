import React, { useState } from 'react';
import { 
  LayoutDashboard, MapPin, ShoppingBag, Users, 
  Settings, LogOut, Plus, Trash2, CheckCircle, XCircle, 
  Clock, Search, Image as ImageIcon, DollarSign,
  CreditCard, QrCode, Landmark, Upload, Copy
} from 'lucide-react';

// --- MOCK INITIAL DATA ---
const initialPackages = [
  { id: 1, title: "Shimla Manali Special", price: 15999, days: "5D/4N", location: "Himachal", status: "Active" },
  { id: 2, title: "Kerala Backwaters", price: 22499, days: "6D/5N", location: "Kerala", status: "Active" },
];

const initialBookings = [
  { id: "#BK-101", customer: "Rahul Sharma", package: "Shimla Manali", date: "2025-01-15", status: "Pending", amount: 15999 },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // --- STATE MANAGEMENT ---
  const [packages, setPackages] = useState(initialPackages);
  const [bookings, setBookings] = useState(initialBookings);
  
  // Package Form State
  const [newPkg, setNewPkg] = useState({ title: '', price: '', days: '', location: '' });
  const [showAddForm, setShowAddForm] = useState(false);

  // --- NEW: PAYMENT SETTINGS STATE ---
  const [paymentDetails, setPaymentDetails] = useState({
    upiId: 'himachaltours@okicici',
    bankName: 'HDFC Bank',
    accName: 'Himachal Destination Pvt Ltd',
    accNo: '50100345678901',
    ifsc: 'HDFC0001234',
    // Default placeholder QR (Google API generates QR from text)
    qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=himachaltours@okicici'
  });

  // --- ACTIONS ---

  // 1. Handle QR Code Upload (Browser Memory)
  const handleQrUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPaymentDetails({ ...paymentDetails, qrImage: imageUrl });
    }
  };

  // 2. Add Package Logic
  const handleAddPackage = (e) => {
    e.preventDefault();
    setPackages([...packages, { id: Date.now(), ...newPkg, status: "Active" }]);
    setShowAddForm(false);
    setNewPkg({ title: '', price: '', days: '', location: '' });
  };

  // 3. Delete Package
  const handleDeletePackage = (id) => {
    if(window.confirm("Delete this package?")) setPackages(packages.filter(p => p.id !== id));
  };

  // 4. Booking Status
  const handleStatusChange = (id, status) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status } : b));
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-emerald-950 text-white flex flex-col shadow-2xl z-20">
        <div className="h-20 flex items-center justify-center border-b border-emerald-800/50">
          <h1 className="font-Lobster text-2xl">Himachal <span className="text-orange-500">Admin</span></h1>
        </div>
        <nav className="flex-1 py-6 px-3 space-y-2">
          <NavButton icon={<LayoutDashboard/>} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <NavButton icon={<ShoppingBag/>} label="Packages" active={activeTab === 'packages'} onClick={() => setActiveTab('packages')} />
          <NavButton icon={<Users/>} label="Bookings" active={activeTab === 'bookings'} onClick={() => setActiveTab('bookings')} />
          {/* NEW TAB */}
          <NavButton icon={<CreditCard/>} label="Payment & QR" active={activeTab === 'payment'} onClick={() => setActiveTab('payment')} />
        </nav>
        <div className="p-4 border-t border-emerald-800">
          <button className="flex items-center gap-3 text-emerald-200 hover:text-white w-full">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 overflow-y-auto p-8 relative custom-scrollbar">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800 capitalize">{activeTab === 'payment' ? 'Payment Settings' : activeTab}</h2>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">A</div>
          </div>
        </header>

        {/* --- 1. DASHBOARD VIEW --- */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-3 gap-6">
            <StatCard title="Total Packages" value={packages.length} icon={<ShoppingBag/>} color="bg-orange-500" />
            <StatCard title="Active Bookings" value={bookings.length} icon={<Users/>} color="bg-blue-500" />
            <StatCard title="Pending Payments" value="₹45,000" icon={<DollarSign/>} color="bg-emerald-600" />
          </div>
        )}

        {/* --- 2. PACKAGES VIEW --- */}
        {activeTab === 'packages' && (
          <div>
            <div className="flex justify-between mb-6">
               <p className="text-slate-500">Manage tour packages.</p>
               <button onClick={() => setShowAddForm(true)} className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold flex gap-2">
                 <Plus size={18} /> Add Package
               </button>
            </div>
            
            {/* Add Package Modal */}
            {showAddForm && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
                  <h3 className="text-xl font-bold mb-4">Add Package</h3>
                  <form onSubmit={handleAddPackage} className="space-y-3">
                    <input required placeholder="Title" className="w-full p-2 border rounded" value={newPkg.title} onChange={e => setNewPkg({...newPkg, title: e.target.value})} />
                    <input required type="number" placeholder="Price" className="w-full p-2 border rounded" value={newPkg.price} onChange={e => setNewPkg({...newPkg, price: e.target.value})} />
                    <input required placeholder="Duration (e.g. 3D/2N)" className="w-full p-2 border rounded" value={newPkg.days} onChange={e => setNewPkg({...newPkg, days: e.target.value})} />
                    <input required placeholder="Location" className="w-full p-2 border rounded" value={newPkg.location} onChange={e => setNewPkg({...newPkg, location: e.target.value})} />
                    <div className="flex gap-3 mt-4">
                      <button type="button" onClick={() => setShowAddForm(false)} className="flex-1 py-2 bg-slate-100 rounded">Cancel</button>
                      <button type="submit" className="flex-1 py-2 bg-emerald-600 text-white rounded">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map(pkg => (
                <div key={pkg.id} className="bg-white rounded-xl border p-4 shadow-sm">
                  <h3 className="font-bold">{pkg.title}</h3>
                  <p className="text-sm text-gray-500">{pkg.location} • {pkg.days}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold text-orange-600">₹{pkg.price}</span>
                    <button onClick={() => handleDeletePackage(pkg.id)} className="text-red-500"><Trash2 size={18}/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 3. BOOKINGS VIEW --- */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
             <table className="w-full text-left text-sm">
               <thead className="bg-slate-50 border-b">
                 <tr>
                   <th className="p-4">ID</th>
                   <th className="p-4">Customer</th>
                   <th className="p-4">Package</th>
                   <th className="p-4">Status</th>
                   <th className="p-4 text-right">Actions</th>
                 </tr>
               </thead>
               <tbody className="divide-y">
                 {bookings.map(b => (
                   <tr key={b.id}>
                     <td className="p-4 font-bold text-emerald-700">{b.id}</td>
                     <td className="p-4">{b.customer}</td>
                     <td className="p-4">{b.package}</td>
                     <td className="p-4"><span className={`px-2 py-1 rounded text-xs ${b.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100'}`}>{b.status}</span></td>
                     <td className="p-4 flex justify-end gap-2">
                       <button onClick={() => handleStatusChange(b.id, 'Confirmed')} className="text-emerald-600 hover:bg-emerald-50 p-1 rounded"><CheckCircle size={18}/></button>
                       <button onClick={() => handleStatusChange(b.id, 'Cancelled')} className="text-red-600 hover:bg-red-50 p-1 rounded"><XCircle size={18}/></button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        )}

        {/* --- 4. PAYMENT & QR SETTINGS (NEW FEATURE) --- */}
        {activeTab === 'payment' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Edit Details */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><QrCode size={24}/></div>
                <div>
                  <h3 className="font-bold text-lg">Payment Methods</h3>
                  <p className="text-slate-500 text-sm">Update UPI and Bank Transfer details</p>
                </div>
              </div>

              {/* QR Upload */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Scan & Pay QR Code</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition cursor-pointer relative">
                  <input type="file" accept="image/*" onChange={handleQrUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                  <Upload className="text-slate-400 mb-2" size={32} />
                  <p className="text-sm font-medium text-slate-600">Click to upload new QR Image</p>
                  <p className="text-xs text-slate-400">Supports JPG, PNG</p>
                </div>
              </div>

              {/* Bank Details Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-slate-700 block mb-1">UPI ID (GooglePay / PhonePe)</label>
                  <div className="flex">
                    <input 
                      type="text" 
                      value={paymentDetails.upiId} 
                      onChange={(e) => setPaymentDetails({...paymentDetails, upiId: e.target.value})}
                      className="flex-1 p-2.5 border border-slate-300 rounded-l-lg focus:outline-none focus:border-orange-500" 
                    />
                    <button className="bg-slate-100 border border-l-0 border-slate-300 px-3 rounded-r-lg text-slate-500 hover:text-orange-500"><Copy size={16}/></button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <label className="text-sm font-bold text-slate-700 block mb-1">Bank Name</label>
                      <input type="text" value={paymentDetails.bankName} onChange={(e) => setPaymentDetails({...paymentDetails, bankName: e.target.value})} className="w-full p-2.5 border rounded-lg" />
                   </div>
                   <div>
                      <label className="text-sm font-bold text-slate-700 block mb-1">IFSC Code</label>
                      <input type="text" value={paymentDetails.ifsc} onChange={(e) => setPaymentDetails({...paymentDetails, ifsc: e.target.value})} className="w-full p-2.5 border rounded-lg uppercase" />
                   </div>
                </div>
                
                <div>
                  <label className="text-sm font-bold text-slate-700 block mb-1">Account Number</label>
                  <input type="text" value={paymentDetails.accNo} onChange={(e) => setPaymentDetails({...paymentDetails, accNo: e.target.value})} className="w-full p-2.5 border rounded-lg" />
                </div>
              </div>

              <button className="w-full bg-emerald-900 text-white py-3 rounded-xl font-bold hover:bg-emerald-800 transition shadow-lg">
                Save Payment Settings
              </button>
            </div>

            {/* Right Column: User Preview (Mobile View) */}
            <div className="bg-slate-100 p-6 rounded-2xl border flex flex-col items-center justify-center">
              <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Customer View Preview</h4>
              
              {/* Fake Mobile Screen */}
              <div className="w-[300px] bg-white rounded-[2rem] border-[8px] border-slate-800 overflow-hidden shadow-2xl">
                {/* Mobile Header */}
                <div className="bg-emerald-900 h-14 flex items-center justify-center text-white font-Lobster">
                  Pay Now
                </div>
                
                {/* Mobile Body */}
                <div className="p-5 space-y-5">
                  <div className="text-center">
                    <p className="text-xs text-slate-500 mb-1">Total Amount</p>
                    <h2 className="text-2xl font-bold text-slate-800">₹15,999</h2>
                  </div>

                  {/* QR Display */}
                  <div className="bg-white p-2 border rounded-xl shadow-sm inline-block mx-auto w-full">
                    <img src={paymentDetails.qrImage} alt="Payment QR" className="w-40 h-40 mx-auto object-contain" />
                    <p className="text-[10px] text-center text-slate-400 mt-2">Scan with any UPI App</p>
                  </div>

                  {/* UPI ID */}
                  <div className="bg-orange-50 p-3 rounded-lg flex justify-between items-center border border-orange-100">
                    <div>
                      <p className="text-[10px] text-orange-600 font-bold uppercase">UPI ID</p>
                      <p className="text-xs font-bold text-slate-800 truncate w-32">{paymentDetails.upiId}</p>
                    </div>
                    <Copy size={14} className="text-orange-500" />
                  </div>

                  {/* Bank Details */}
                  <div className="border-t pt-3">
                     <p className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1"><Landmark size={12}/> Bank Transfer</p>
                     <div className="text-xs text-slate-500 space-y-1">
                        <p>Bank: <span className="text-slate-800 font-medium">{paymentDetails.bankName}</span></p>
                        <p>A/c No: <span className="text-slate-800 font-medium">{paymentDetails.accNo}</span></p>
                        <p>IFSC: <span className="text-slate-800 font-medium">{paymentDetails.ifsc}</span></p>
                     </div>
                  </div>
                  
                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-xs font-bold">
                    I Have Made Payment
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>
    </div>
  );
}

// --- Sub Components ---
const NavButton = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${active ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'text-emerald-100 hover:bg-emerald-900'}`}
  >
    {icon} <span className="font-medium">{label}</span>
  </button>
);

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl text-white ${color}`}>{icon}</div>
    </div>
    <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
    <p className="text-slate-500 text-sm">{title}</p>
  </div>
);