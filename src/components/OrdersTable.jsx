import React from 'react';

const OrdersTable = ({ orders }) => {
  return (
    <div className="p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-300">Order ID</th>
            <th className="p-2 border border-gray-300">Customer</th>
            <th className="p-2 border border-gray-300">Amount</th>
            <th className="p-2 border border-gray-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="hover:bg-gray-100">
              <td className="p-2 border border-gray-300">{order.id}</td>
              <td className="p-2 border border-gray-300">{order.customer}</td>
              <td className="p-2 border border-gray-300">${order.amount}</td>
              <td className="p-2 border border-gray-300">{order.status}</td>
            </tr> 
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;