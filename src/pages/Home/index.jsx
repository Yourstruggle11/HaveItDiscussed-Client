import React from "react";

export default function Home() {
  return (
    <>
      <div className="relative bg-[#f9fafb] dark:bg-MB overflow-hidden p-10 h-[100vh]">
      <div class="max-w-sm w-full lg:max-w-full lg:flex items-center justify-center bg-[#f9fafb]">
          <div class="shadow-md cursor-pointer min-w-[50rem] border-1 border border-gray-400  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <p class="text-sm text-gray-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
               </svg>
               <h1 className="mx-2 font-extrabold">5</h1>
               <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-600 bg-slate-200 uppercase last:mr-0 mr-1">
                    Tags One
                </span>
               <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-600 bg-slate-200 uppercase last:mr-0 mr-1">
                    Tags Two
                </span>
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">
                Can coffee make you a better developer?
              </div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing ...
              </p>
            </div>
            <div class="flex items-center">
              <img
                class="w-10 h-10 rounded-full mr-4"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Avatar"
              />
              <div class="text-sm">
                <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                <p class="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
