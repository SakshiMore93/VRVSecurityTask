import React from 'react';

const RolesTab = ({ roles, onEditRole, onDeleteRole, onAddRole }) => (
    <div className="p-4 ">
       <div className='flex justify-between'>
       <div className='font-bold text-2xl w-full'>Role Management</div>
        <button
            onClick={onAddRole}
            className="bg-slate-700 w-32 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded shadow"
        >
            Add Role
        </button>
       </div>
        <table className="w-full  mt-7 border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100 text-left">
                <tr>
                    <th className="px-4 bg-slate-300 py-2 text-lg font-bold text-gray-700">Name</th>
                    <th className="px-4 bg-slate-300 py-2 text-lg font-bold text-gray-700">Permissions</th>
                    <th className="px-4 bg-slate-300 py-2 text-lg font-bold text-gray-700">Actions</th>
                </tr>
            </thead>
            <tbody>
                {roles.length > 0 ? (
                    roles.map((role) => (
                        <tr
                            key={role.id}
                            className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            <td className="px-4 py-2 text-lg text-gray-700">{role.name}</td>
                            <td className="px-4 py-2 text-lg text-gray-700">
                                {role.permissions.join(', ')}
                            </td>
                            <td className="px-4 py-2 text-lg">
                                <button
                                    onClick={() => onEditRole(role)}
                                    className="text-blue-600 hover:text-blue-800 mr-4"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDeleteRole(role.id)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td
                            colSpan="3"
                            className="px-4 py-4 text-center text-sm text-gray-500"
                        >
                            No roles available.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
);

export default RolesTab;
