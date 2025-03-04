import React, { useState } from 'react';

const PhaseTabs = () => {
  const [activeTab, setActiveTab] = useState('Phase 1');

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('Phase 1')}
          className={`px-4 py-2 rounded ${activeTab === 'Phase 1' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Phase 1
        </button>
        <button
          onClick={() => setActiveTab('Phase 2')}
          className={`px-4 py-2 rounded ${activeTab === 'Phase 2' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Phase 2
        </button>
        <button
          onClick={() => setActiveTab('Funded')}
          className={`px-4 py-2 rounded ${activeTab === 'Funded' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Funded
        </button>
      </div>
      <div className="p-4 border border-gray-300 rounded">
        {activeTab === 'Phase 1' && <div>Phase 1 Content</div>}
        {activeTab === 'Phase 2' && <div>Phase 2 Content</div>}
        {activeTab === 'Funded' && <div>Funded Content</div>}
      </div>
    </div>
  );
};

export default PhaseTabs;