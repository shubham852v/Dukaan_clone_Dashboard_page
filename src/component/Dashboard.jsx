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
          <svg
              width="100%"
              height="100%"
              viewBox="0 0 289 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <g clip-path="url(#clip0_41388_120697)">
              <path d="M131.099 20.6998V58.9998C131.099 59.8998 130.599 60.3998 129.699 60.3998H124.899C123.999 60.3998 123.499 59.8998 123.499 58.9998V56.9998C121.399 59.6998 118.299 61.2998 113.999 61.2998C106.199 61.2998 99.6992 54.5998 99.6992 45.7998C99.6992 36.9998 106.199 30.2998 113.999 30.2998C118.299 30.2998 121.399 31.8998 123.499 34.5998V20.6998C123.499 19.7998 123.999 19.2998 124.899 19.2998H129.699C130.599 19.2998 131.099 19.7998 131.099 20.6998ZM123.499 45.6998C123.499 40.7998 119.999 37.3998 115.399 37.3998C110.699 37.3998 107.299 40.7998 107.299 45.6998C107.299 50.5998 110.799 53.9998 115.399 53.9998C119.999 53.9998 123.499 50.6998 123.499 45.6998Z" fill="black"/>
            <path d="M158.599 31C159.499 31 159.999 31.5 159.999 32.4V59C159.999 59.9 159.499 60.4 158.599 60.4H153.799C152.899 60.4 152.399 59.9 152.399 59V57.4C150.799 59.9 148.099 61.2 144.399 61.2C138.899 61.2 134.799 57 134.799 49.8V32.4C134.799 31.5 135.299 31 136.199 31H140.999C141.899 31 142.399 31.5 142.399 32.4V49.2C142.399 52.6 144.399 54.2 147.099 54.2C150.099 54.2 152.399 52.5 152.399 48.1V32.4C152.399 31.5 152.899 31 153.799 31H158.599Z" fill="black"/>
            <path d="M188.998 60.3998H183.398C182.698 60.3998 182.098 60.0998 181.698 59.4998L171.998 47.0998V58.9998C171.998 59.8998 171.498 60.3998 170.598 60.3998H165.798C164.898 60.3998 164.398 59.8998 164.398 58.9998V20.6998C164.398 19.7998 164.898 19.2998 165.798 19.2998H170.598C171.498 19.2998 171.998 19.7998 171.998 20.6998V43.9998L181.098 31.8998C181.498 31.2998 182.098 30.9998 182.798 30.9998H188.398C189.498 30.9998 189.898 31.7998 189.198 32.6998L179.298 45.5998L189.698 58.7998C190.598 59.6998 190.198 60.3998 188.998 60.3998Z" fill="black"/>
            <path d="M204.599 30.2002C211.099 30.2002 216.599 34.1002 216.599 41.7002V59.0002C216.599 59.9002 216.099 60.4002 215.199 60.4002H210.599C209.699 60.4002 209.199 59.9002 209.199 59.0002V57.9002C207.499 60.0002 204.999 61.2002 201.199 61.2002C195.999 61.2002 191.299 58.1002 191.299 52.0002C191.299 45.8002 195.999 42.8002 201.199 42.8002C204.899 42.8002 207.499 43.9002 209.199 45.4002V42.3002C209.199 38.8002 207.399 37.4002 204.599 37.4002C202.399 37.4002 200.699 38.3002 200.199 39.9002C199.899 40.7002 199.599 41.1002 198.699 41.1002H193.999C193.099 41.1002 192.499 40.6002 192.599 39.6002C193.499 33.6002 198.599 30.2002 204.599 30.2002ZM209.199 52.0002C209.199 49.7002 207.099 48.3002 203.799 48.3002C200.499 48.3002 198.899 49.8002 198.899 52.0002C198.899 54.2002 200.499 55.7002 203.799 55.7002C207.099 55.6002 209.199 54.1002 209.199 52.0002Z" fill="black"/>
            <path d="M233.4 30.2002C239.9 30.2002 245.4 34.1002 245.4 41.7002V59.0002C245.4 59.9002 244.9 60.4002 244 60.4002H239.4C238.5 60.4002 238 59.9002 238 59.0002V57.9002C236.3 60.0002 233.8 61.2002 230 61.2002C224.8 61.2002 220.1 58.1002 220.1 52.0002C220.1 45.8002 224.8 42.8002 230 42.8002C233.7 42.8002 236.3 43.9002 238 45.4002V42.3002C238 38.8002 236.2 37.4002 233.4 37.4002C231.2 37.4002 229.5 38.3002 229 39.9002C228.7 40.7002 228.4 41.1002 227.5 41.1002H222.8C221.9 41.1002 221.3 40.6002 221.4 39.6002C222.2 33.6002 227.4 30.2002 233.4 30.2002ZM237.9 52.0002C237.9 49.7002 235.8 48.3002 232.5 48.3002C229.2 48.3002 227.6 49.8002 227.6 52.0002C227.6 54.2002 229.2 55.7002 232.5 55.7002C235.9 55.6002 237.9 54.1002 237.9 52.0002Z" fill="black"/>
            <path d="M264.799 30.2002C270.299 30.2002 274.399 34.4002 274.399 41.6002V59.0002C274.399 59.9002 273.899 60.4002 272.999 60.4002H268.199C267.299 60.4002 266.799 59.9002 266.799 59.0002V42.2002C266.799 38.8002 264.799 37.2002 262.099 37.2002C259.099 37.2002 256.799 38.9002 256.799 43.3002V59.0002C256.799 59.9002 256.299 60.4002 255.399 60.4002H250.599C249.699 60.4002 249.199 59.9002 249.199 59.0002V32.4002C249.199 31.5002 249.699 31.0002 250.599 31.0002H255.399C256.299 31.0002 256.799 31.5002 256.799 32.4002V34.0002C258.399 31.6002 261.099 30.2002 264.799 30.2002Z" fill="black"/>
            <path d="M42.1 84.2C65.3512 84.2 84.2 65.3512 84.2 42.1C84.2 18.8488 65.3512 0 42.1 0C18.8488 0 0 18.8488 0 42.1C0 65.3512 18.8488 84.2 42.1 84.2Z" fill="#146EB4"/>
            <path d="M58.6992 20H25.4992C22.2992 20 19.6992 22.6 19.6992 25.8V58.3C19.6992 61.5 22.2992 64.1 25.4992 64.1H58.6992C61.8992 64.1 64.4992 61.5 64.4992 58.3V25.8C64.4992 22.6 61.8992 20 58.6992 20ZM42.0992 45.9C33.8992 45.9 27.0992 39.5 26.3992 31.4C26.2992 30.5 26.5992 29.7 27.1992 29.1C27.7992 28.5 28.4992 28.1 29.3992 28C30.1992 27.9 31.0992 28.2 31.6992 28.7C32.3992 29.3 32.6992 30 32.7992 30.9C33.1992 35.7 37.1992 39.5 42.0992 39.5C46.8992 39.5 50.9992 35.7 51.3992 30.9C51.4992 29.2 53.0992 27.9 54.7992 28C55.6992 28.1 56.3992 28.5 56.9992 29.1C57.5992 29.7 57.7992 30.6 57.7992 31.4C57.0992 39.5 50.1992 45.9 42.0992 45.9Z" fill="white"/>
            <path d="M281.2 16.4004C277.2 16.4004 273.9 19.7004 273.9 23.7004C273.9 27.7004 277.2 31.0004 281.2 31.0004C285.2 31.0004 288.5 27.7004 288.5 23.7004C288.5 19.7004 285.3 16.4004 281.2 16.4004ZM281.2 17.5004C284.6 17.5004 287.4 20.3004 287.4 23.7004C287.4 27.1004 284.6 29.9004 281.2 29.9004C277.8 29.9004 275 27.1004 275 23.7004C275 20.3004 277.8 17.5004 281.2 17.5004ZM279 20.3004V27.1004H280.1V24.6004H281.6L283.2 27.1004H284.3L282.7 24.5004C282.9 24.5004 283.1 24.4004 283.2 24.4004C283.5 24.3004 283.8 24.1004 284 23.9004C284.2 23.7004 284.3 23.5004 284.4 23.2004C284.5 23.0004 284.5 22.7004 284.5 22.5004C284.5 22.3004 284.5 22.0004 284.4 21.8004C284.3 21.6004 284.2 21.4004 284 21.1004C283.8 20.9004 283.5 20.7004 283.2 20.6004C282.9 20.4004 282.4 20.4004 281.9 20.4004H279V20.3004ZM280.1 21.2004H281.6C281.8 21.2004 282 21.2004 282.2 21.3004C282.4 21.3004 282.6 21.4004 282.8 21.5004C283 21.6004 283.1 21.7004 283.2 21.8004C283.3 22.0004 283.4 22.1004 283.4 22.4004C283.4 22.6004 283.4 22.9004 283.2 23.0004C283 23.1004 283 23.3004 282.8 23.4004C282.6 23.5004 282.4 23.5004 282.2 23.6004C282 23.7004 281.8 23.7004 281.6 23.7004H280.1V21.2004Z" fill="black"/>
              </g>
              <defs>
                <clipPath id="clip0_41388_120697">
                  <rect width="288.6" height="84.2" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="flex flex-col gap-1 w-[108px] justify-center">
             
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
          <div className="py-[1px] px-3 bg-[#353C53] mx-5 rounded gap-20 items-center mt-20">
      <div className="flex gap-3 items-center">
        <div className="w-9 h-9 bg-[#FFFFFF]/10 rounded p-[6px] flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
</svg>

        </div>
        <div className="flex flex-col text-white gap-[2px]">
          <h3 className="text-[13px] text-[#FFFFFF] font-light">Available Credits</h3>
          <h6 className="text-base font-medium">224.10</h6>
        </div>
      </div>
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
