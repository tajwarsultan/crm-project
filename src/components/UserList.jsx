import React, { useState } from 'react';

const UserList = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search users..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-300">Name</th>
            <th className="p-2 border border-gray-300">Email</th>
            <th className="p-2 border border-gray-300">Phase</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="p-2 border border-gray-300">{user.name}</td>
              <td className="p-2 border border-gray-300">{user.email}</td>
              <td className="p-2 border border-gray-300">{user.phase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;