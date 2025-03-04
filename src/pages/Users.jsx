import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import UserList from '../components/UserList';

const Users = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phase: 'Phase 1' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phase: 'Phase 2' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Users</h1>
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
};

export default Users;