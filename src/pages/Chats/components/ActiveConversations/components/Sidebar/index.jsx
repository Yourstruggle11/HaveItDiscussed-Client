import React from 'react';
import LogoutIcon from '../../../../../../components/CustomIcon/LogoutIcon';

const Sidebar = () => {
  return (
    <aside className="bg-white pt-20 dark:bg-MB h-screen w-64 fixed left-0 top-0 py-4 px-2">
      {/* Back Button */}
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-4"
        onClick={() => {
          // Handle the back button click here
          console.log('Back button clicked!');
        }}
      >
        <LogoutIcon />
      </button>

      {/* Create Group Chat Button */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full mb-4"
      >
        Create Group Chat
      </button>

      {/* Search Box */}
      <div className="bg-gray-200 dark:bg-gray-700 rounded-md py-2 px-3">
        <input
          type="text"
          placeholder="Search for users..."
          className="w-full bg-transparent outline-none"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
