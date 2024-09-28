import React from 'react';
import { useRecoilState } from 'recoil';
import { activeSectionState, isDashboardVisibleState } from './atoms'; // Import Recoil atoms

const Dashboard = () => {
  const [activeSection, setActiveSection] = useRecoilState(activeSectionState);
  const [isDashboardVisible, setIsDashboardVisible] = useRecoilState(isDashboardVisibleState); // For visibility control

  // Function to close the dashboard on small screens
  const closeDashboard = () => {
    setIsDashboardVisible(false);
  };

  return (
    <aside
      className={`fixed lg:sticky left-0 top-0 z-10 h-[100dvh] w-full transition-all duration-300 lg:max-w-[224px] ${
        isDashboardVisible ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}
    >
      <div className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75 lg:hidden" onClick={closeDashboard}></div>
      <button className="hidden top-5 right-4 lg:hidden" aria-label="Close Sidebar" onClick={closeDashboard}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-white text-3xl" height="1em" width="1em">
          <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
        </svg>
      </button>

      {/* Conditionally apply blur when 'Payouts' is the active section */}
      <div
        className={`relative mr-auto transition-transform duration-300 ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between ${
          activeSection === 'Payouts' ? 'blur-sm' : ''
        }`}
      >
        <div className="w-full flex flex-col gap-6 items-center">
          <div className="flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto">
            <div className="bg-white w-[39px] h-[39px] m-[0.5px] rounded-[4px] relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1 w-[108px] justify-center">
              <h3 className="font-medium text-[15px] leading-[22px]">DUKAAN</h3>
              <a className="underline leading-[16px] text-[13px] font-extralight w-fit text-[#D2D4D9]" href="#">
                Visit Store
              </a>
            </div>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-[20px] h-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
          </div>
          <div className="w-full flex-col gap-4">
            {/* Sections */}
            {sections.map(section => (
              <NavItem
                key={section.text}
                icon={section.icon}
                text={section.text}
                isActive={activeSection === section.text}
                onClick={() => setActiveSection(section.text)}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

// List of sections with icons
const sections = [
  {
    text: 'Home',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16"><path d="M8 0l8 8-1.5 1.5L8 2.5 1.5 9.5 0 8l8-8z"/><path d="M3 12v-2h10v2H3z"/></svg>
  },
  {
    text: 'Orders',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-basket" viewBox="0 0 16 16"><path d="M4 4h8a1 1 0 0 1 1 1v1h-1V5H4v1H3V5a1 1 0 0 1 1-1zM1 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h8a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3z"/></svg>
  },
  {
    text: 'Products',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16"><path d="M3.5 0h9a1 1 0 0 1 1 1v2.5H2V1a1 1 0 0 1 1-1zM0 4v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H0z"/></svg>
  },
  {
    text: 'Delivery',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16"><path d="M0 1h10v10H0z"/><path d="M11 0v8h5v2h-4.5A1.5 1.5 0 0 0 11 11v1h5v-5l-4-4H11z"/></svg>
  },
  {
    text: 'Marketing',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-megaphone" viewBox="0 0 16 16"><path d="M3 3v10h3V3H3z"/><path d="M8 0v16h8V0H8z"/></svg>
  },
  {
    text: 'Analytics',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16"><path d="M1 1h14v14H1z"/><path d="M4 14V4h2v10H4zm6 0V1h2v13h-2z"/></svg>
  },
  {
    text: 'Payouts',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cash" viewBox="0 0 16 16"><path d="M0 3v10h16V3H0zM1 5h14v6H1V5z"/><path d="M2 6v4h12V6H2z"/></svg>
  },
  {
    text: 'Discounts',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-tags" viewBox="0 0 16 16"><path d="M3 2v8h10V2H3zM2 0h12v12H2V0z"/></svg>
  },
  {
    text: 'Audience',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16"><path d="M0 1v6h16V1H0z"/><path d="M8 9v7h8V9H8z"/></svg>
  },
  {
    text: 'Appearance',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-brush" viewBox="0 0 16 16"><path d="M3 2h10v12H3V2z"/></svg>
  },
  {
    text: 'Plugins',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plug" viewBox="0 0 16 16"><path d="M0 0v8h8V0H0zM1 1h6v6H1V1z"/></svg>
  }
];

const NavItem = ({ icon, text, isActive, onClick }) => {
  // Check if the section is 'Payouts' and always apply the active style
  const isPayouts = text === 'Payouts';

  return (
    <div
      className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-[#333b55] transition ${
        isActive || isPayouts ? 'bg-[#272D45]' : 'bg-transparent'
      }`}
      onClick={onClick}
    >
      <div className="text-white">{icon}</div>
      <span className="text-white text-sm font-medium">{text}</span>
    </div>
  );
};


export default Dashboard;
