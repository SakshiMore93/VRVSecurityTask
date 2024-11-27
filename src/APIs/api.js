export const initialUsers = [
  { id: 1, name: 'Sakshi More', email: 'sakshi123@gmail.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Suyash More', email: 'suyash123@gmail.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Saransh Patil', email: 'saransh675@gmail.com', role: 'Viewer', status: 'Inactive' },
];

export const initialRoles = [
  { id: 1, name: 'Admin', permissions: ['read', 'write', 'delete'] },
  { id: 2, name: 'Editor', permissions: ['read', 'write'] },
  { id: 3, name: 'Viewer', permissions: ['read'] },
];

export const allPermissions = ['read', 'write', 'delete', 'manage_users', 'manage_roles'];
