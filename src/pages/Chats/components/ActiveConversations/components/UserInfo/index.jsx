import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const { userInfo } = useSelector((state) => state.userSignin);

  return (
    <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
      <div className="h-20 w-20 rounded-full border overflow-hidden">
        <img
          src={userInfo?.profilePic}
          alt="Avatar"
          className="h-full w-full"
        />
      </div>
      <div className="text-sm font-semibold mt-2 dark:text-black" >{userInfo?.name}</div>
      {/* <div className="text-xs text-gray-500">Lead UI/UX Designer</div> */}
    </div>
  );
};

export default UserInfo;
