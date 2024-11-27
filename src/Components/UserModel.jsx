import React, { useState, useEffect } from 'react';

const UserModal = ({ user, roles, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        status: 'Active',
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                role: user.role || '', // Handle role in case it's not set
                status: user.status || 'Active',
            });
        } else {
            setFormData({
                name: '',
                email: '',
                role: '',
                status: 'Active',
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.role) {
            alert("Please select a role.");
            return;
        }
        onSave(formData);
        onClose();
    };

    return (
        <div className="modal-backdrop  " style={{marginLeft:"45rem"}}>
            <div className="bg-slate-300 rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {user ? 'Edit User' : 'Add User'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-lg font-semibold text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-transparent shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Role</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg"
                                required
                            >
                                <option value="">Select a role</option>
                                {roles.map((role) => (
                                    <option key={role.id} value={role.name}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg"
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-6 space-x-3">
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-lg font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;
