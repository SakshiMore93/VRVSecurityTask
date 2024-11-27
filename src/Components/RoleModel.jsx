import React, { useState, useEffect } from 'react';

const RoleModal = ({ role, allPermissions, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        permissions: [],
    });

    useEffect(() => {
        if (role) {
            setFormData({
                name: role.name,
                permissions: role.permissions || [],
            });
        }
    }, [role]);

    const togglePermission = (permission) => {
        const newPermissions = formData.permissions.includes(permission)
            ? formData.permissions.filter((p) => p !== permission)
            : [...formData.permissions, permission];
        setFormData({ ...formData, permissions: newPermissions });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="modal-backdrop" style={{marginLeft:"45rem"}}>
            <div className="bg-slate-300 rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {role ? 'Edit Role' : 'Add Role'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Role Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2">Permissions</label>
                            <div className="space-y-2">
                                {allPermissions.map((permission) => (
                                    <label key={permission} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={formData.permissions.includes(permission)}
                                            onChange={() => togglePermission(permission)}
                                            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                        <span className="ml-2 text-lg text-gray-700">
                                            {permission.charAt(0).toUpperCase() + permission.slice(1).replace('_', ' ')}
                                        </span>
                                    </label>
                                ))}
                            </div>
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

export default RoleModal;
