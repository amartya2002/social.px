"use client"
import React, { useState } from "react";

const NavbarTop = ({ toggleLeftSidebar, toggleRightSidebar, toggleMobileLeftSidebar, toggleMobileRightSidebar }) => (
  <div className="bg-red-300 h-12 w-full fixed top-0 ">
    <div className="flex justify-between mx-6 h-full ">
      <button onClick={toggleMobileLeftSidebar} className="md:hidden">Left Mobile Sidebar</button>
      <button onClick={toggleMobileRightSidebar} className="md:hidden">Right Mobile Sidebar</button>
      <button className="hidden md:block" onClick={toggleLeftSidebar} >Left Sidebar toggle</button>
      <button className="hidden md:block" onClick={toggleRightSidebar}>Right Sidebar toggle</button>

    </div>
  </div>
);

const LeftSidebar = ({ isOpen }) => (
  <aside className={`min-w-[15rem] lg:min-w-[20rem] bg-pink-200 rounded-2xl h-screen hidden  ${isOpen ? ' md:block' : ' hidden '}  `}>
    <div className="h-screen flex justify-center">
      <SidebarBox />
    </div>
  </aside>
);


const RightSidebar = ({ isOpen }) => (
  <aside className={`min-w-[12rem]   bg-pink-200 rounded-2xl h-screen hidden ${isOpen ? 'md:block' : 'hidden'} `}>
    <div className="h-screen flex justify-center">
      <LeftSidebarBox />
    </div>
  </aside>
);

const MiddleSection = () => (
  <section className="w-[40rem] bg-orange-200 rounded-2xl h-[300vh] ">
  </section>
)

const SidebarBox = () => (
  <div className="bg-red-300 h-72  min-w-[15rem] lg:w-[20rem] rounded-2xl fixed"></div>
);


const LeftSidebarBox = () => (
  <div className="bg-red-400 h-72  w-[12rem] rounded-2xl fixed"></div>
);

const xMobileLeftSidebar = ({ isOpen, closeMobileLeftSidebar }) => (
  <aside className={` w-full h-full bg-gray-200  fixed top-12 left-0 transform transition-transform ease-in-out duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
    <div className="w-64 h-full px-2 rounded bg-black text-white">

      <div className="flex justify-end py-2">
        <button onClick={closeMobileLeftSidebar} className="text-white focus:outline-none" >Close</button>
      </div>

      <div className="h-full border ">
        {/* Sidebar content */}
        <p>Hello, this is your sidebar content.</p>
      </div>

    </div>
  </aside>
);


const MobileLeftSidebar = ({ isOpen, closeMobileLeftSidebar }) => (
  <div className={`fixed top-12 inset-0 z-50 flex items-center justify-center backdrop-blur-sm transform transition-transform ease-in-out duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
    <aside className={`w-64 h-full  fixed  left-0  `}>

      <div className="w-full h-full p-2 bg-black text-white ">

    

        <div className="h-[90%]  p-2">
          {/* Sidebar content */}
          <p className="text-gray-400">Hello, this is your Left sidebar content.</p>
        </div>
        <div className="flex justify-center ">
          <button onClick={closeMobileLeftSidebar} className="text-gray-500 focus:outline-none">Close</button>
        </div>

      </div>
    </aside>
  </div>
);

const MobileRightSidebar = ({ isOpen, closeMobileLeftSidebar }) => (
  <div className={`fixed top-12 inset-0 z-50 flex items-center justify-center backdrop-blur-sm transform transition-transform ease-in-out duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
    <aside className={`w-64 h-full  fixed  right-0  `}>

      <div className="w-full h-full p-2 bg-black text-white ">

    

        <div className="h-[90%]  p-2">
          {/* Sidebar content */}
          <p className="text-gray-400">Hello, this is your Right sidebar content.</p>
        </div>
        <div className="flex justify-center ">
          <button onClick={closeMobileLeftSidebar} className="text-gray-500 focus:outline-none">Close</button>
        </div>

      </div>
    </aside>
  </div>
);



export default function Home() {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [isMobileLeftSidebarOpen, setMobileLeftSidebarOpen] = useState(false);
  const [isMobileRightSidebarOpen, setMobileRightSidebarOpen] = useState(false);
  const toggleLeftSidebar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  const toggleMobileLeftSidebar = () => {
    setMobileLeftSidebarOpen(!isMobileLeftSidebarOpen);
  };
  const closeMobileLeftSidebar = () => {
    setMobileLeftSidebarOpen(!isMobileLeftSidebarOpen);
  };
  const toggleMobileRightSidebar = () => {
    setMobileRightSidebarOpen(!isMobileRightSidebarOpen);
  };
  const closeMobileRightSidebar = () => {
    setMobileRightSidebarOpen(!isMobileRightSidebarOpen);
  };

  return (
    <>
      <NavbarTop toggleLeftSidebar={toggleLeftSidebar} toggleRightSidebar={toggleRightSidebar} toggleMobileLeftSidebar={toggleMobileLeftSidebar}  toggleMobileRightSidebar={toggleMobileRightSidebar}/>

      <MobileLeftSidebar isOpen={isMobileLeftSidebarOpen}
        closeMobileLeftSidebar={closeMobileLeftSidebar} />

<MobileRightSidebar isOpen={isMobileRightSidebarOpen}
        closeMobileLeftSidebar={closeMobileRightSidebar} />

      <main className="mt-20 mx-3 mb-6">

        <div className="flex md:space-x-8 justify-center">

          <LeftSidebar isOpen={isLeftSidebarOpen} />
          <MiddleSection />
          <RightSidebar isOpen={isRightSidebarOpen} />
        </div>
      </main>
    </>
  );
}
