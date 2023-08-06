import React from 'react';

const ActiveConversationList = ({ users }) => {
  return (
    <div className="h-full overflow-y-auto flex flex-col mt-8">
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold">Active Conversations</span>
        <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
          4
        </span>
      </div>
      <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
        {/* Active Conversations Buttons */}
        {users.map((user) => (
          <button
            key={user.id}
            className="flex flex-row items-center hover:bg-gray-100 dark:hover:bg-MB rounded-xl p-2"
          >
            <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
              {user.profilePicture}
            </div>
            <div className="ml-2 text-sm font-semibold">
              {user.name}
            </div>
            {user.unreadMessageCount > 0 && (
              <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                {user.unreadMessageCount}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActiveConversationList;
