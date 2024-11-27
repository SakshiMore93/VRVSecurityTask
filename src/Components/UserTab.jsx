import React from 'react';

const UsersTab = ({ users, roles, onEditUser, onDeleteUser, onAddUser }) => (
    <div className="p-4">
       <div className='flex justify-between'>
       <div className='font-bold text-2xl w-full'>User Management</div>
        <button
            onClick={onAddUser}
            className="bg-slate-700 w-32 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded shadow"
        >
            Add User
        </button>
       </div>
        <table className="w-full mt-6 border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100 text-left">
                <tr>
                    <th className="px-4 py-2 bg-slate-300  text-lg  font-medium text-gray-700">Name</th>
                    <th className="px-4 py-2 bg-slate-300  text-lg  font-medium text-gray-700">Email</th>
                    <th className="px-4 py-2 bg-slate-300  text-lg  font-medium text-gray-700">Role</th>
                    <th className="px-4 py-2 bg-slate-300  text-lg  font-medium text-gray-700">Status</th>
                    <th className="px-4 py-2 bg-slate-300  text-lg  font-medium text-gray-700">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map((user) => (
                        <tr
                            key={user.id}
                            className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            <td className="px-4 py-2 text-lg text-gray-700">{user.name}</td>
                            <td className="px-4 py-2 text-lg text-gray-700">{user.email}</td>
                            <td className="px-4 py-2 text-lg text-gray-700">{user.role}</td>
                            <td
                                className={`px-4 py-2 text-lg font-medium ${
                                    user.status === 'Active'
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                }`}
                            >
                                {user.status}
                            </td>
                            <td className="px-4 py-2 text-lg">
                                <button
                                    onClick={() => onEditUser(user)}
                                    className="text-blue-600 hover:text-blue-800 mr-4"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDeleteUser(user.id)}
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
                            colSpan="5"
                            className="px-4 py-4 text-center text-sm text-gray-500"
                        >
                            No users available.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
);

export default UsersTab;
