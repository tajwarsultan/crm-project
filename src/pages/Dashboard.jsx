import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PhaseTabs from '../components/PhaseTabs';
import OrdersTable from '../components/OrdersTable';

const Dashboard = () => {
  const sampleOrders = [
    { id: 1, customer: 'John Doe', amount: 100, status: 'Completed' },
    { id: 2, customer: 'Jane Smith', amount: 200, status: 'Pending' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <PhaseTabs />
          <OrdersTable orders={sampleOrders} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;