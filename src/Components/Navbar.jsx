import React from "react";

const Navbar = ({ activeTab, setActiveTab  }) => (
  <nav className="bg-slate-800 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
          <h1 className="text-xl font-bold text-gray-50 mt-4">Admin Dashboard</h1>
          <div className="flex space-x-8">
              <button
                  onClick={() => setActiveTab('users')}
                  className={`py-4 px-1 border-b-2 font-medium ${
                      activeTab === 'users' ? 'border-blue-500 text-blue-600' : 'border-transparent text-white'
                  }`}
              >
                  Users
              </button>
              <button
                  onClick={() => setActiveTab('roles')}
                  className={`py-4 px-1 border-b-2 font-medium ${
                      activeTab === 'roles' ? 'border-blue-500 text-blue-600' : 'border-transparent text-white'
                  }`}
              >
                  Roles
              </button>
          </div>
      </div>
  </div>
</nav>
);


export default Navbar;