import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import UsersTab from "./Components/UserTab";
import RolesTab from "./Components/RolesTab";
import UserModal from "./Components/UserModel";
import RoleModal from "./Components/RoleModel";
import { allPermissions, initialRoles, initialUsers } from "./APIs/api";



const App = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState(initialUsers);
  const [roles, setRoles] = useState(initialRoles);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [editingRole, setEditingRole] = useState(null);

  

  // User operations
  const addUser = (user) => setUsers([...users, { ...user, id: users.length + 1 }]);
  const editUser = (user) => setUsers(users.map(u => (u.id === user.id ? user : u)));
  const deleteUser = (userId) => setUsers(users.filter(u => u.id !== userId));

  // Role operations
  const addRole = (role) => setRoles([...roles, { ...role, id: roles.length + 1 }]);
  const editRole = (role) => setRoles(roles.map(r => (r.id === role.id ? role : r)));
  const deleteRole = (roleId) => setRoles(roles.filter(r => r.id !== roleId));

  return (
    <div className="min-h-screen">
    <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    <div className="max-w-7xl  mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 'users' && (
            <UsersTab
                users={Array.isArray(users) ? users : []} // Safeguard users
                roles={roles}
                onEditUser={(user) => {
                    setEditingUser(user);
                    setShowUserModal(true);
                }}
                onDeleteUser={deleteUser}
                onAddUser={() => {
                    setEditingUser(null);
                    setShowUserModal(true);
                }}
            />
        )}
        {activeTab === 'roles' && (
            <RolesTab
                roles={roles}
                onEditRole={(role) => {
                    setEditingRole(role);
                    setShowRoleModal(true);
                }}
                onDeleteRole={deleteRole}
                onAddRole={() => {
                    setEditingRole(null);
                    setShowRoleModal(true);
                }}
            />
        )}
    </div>

    {/* Modals */}
    {showUserModal && (
        <UserModal
            user={editingUser}
            roles={roles}
            onSave={(user) => {
                editingUser ? editUser(user) : addUser(user);
                setShowUserModal(false);
            }}
            onClose={() => setShowUserModal(false)}
        />
    )}
    {showRoleModal && (
        <RoleModal
            role={editingRole}
            allPermissions={allPermissions}
            onSave={(role) => {
                editingRole ? editRole(role) : addRole(role);
                setShowRoleModal(false);
            }}
            onClose={() => setShowRoleModal(false)}
        />
    )}
 
</div>
);
    
};

export default App;