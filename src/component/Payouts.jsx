import React from 'react';
import { useRecoilState } from 'recoil';
import { isDashboardVisibleState } from './atoms'; // Import the visibility atom

// Separate component for Payout Card
const PayoutCard = ({ title, amount, orders, nextPayment }) => {
    return (
        <div className="flex-grow rounded-[8px] bg-[#146EB4] p-5 flex flex-col gap-4 shadow-sm h-fit min-w-[300px] transition-colors duration-200 ease-in-out hover:bg-[#0E4F82] active:bg-gray-400 cursor-pointer text-[#F2F2F2]">
            <h5 className="flex gap-3 items-center text-black">
                {title}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>

            </h5>
            <div className="flex justify-between items-center">
                <p className="text-3xl font-medium">{amount}</p>
                <p className="flex items-center font-medium text-base underline text-black">
                    {orders} Orders
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </p>
            </div>
            {nextPayment && (
                <div className="px-6 py-2 bg-[#0E4F82] flex justify-between text-[#F2F2F2] rounded-[8px]">
                    <p>Next Payment Date:</p>
                    <p>{nextPayment}</p>
                </div>
            )}
        </div>
    );
};

const Payouts = () => {
    const [, setIsDashboardVisible] = useRecoilState(isDashboardVisibleState);
  
    // Function to open the dashboard
    const openDashboard = () => {
      setIsDashboardVisible(true);
    };
    
    
    return (
        
            <div className="w-full bg-pink-50 ">
            <header className="flex justify-between items-center sm:gap-4 gap-2 sm:px-8 px-4 py-3 border-b border-[#D9D9D9] sticky top-0 bg-[#FFFFFF]">
            <div className="flex gap-2 sm:gap-4 items-center sm:flex-grow">
      <button className="block lg:hidden" onClick={openDashboard}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="text-2xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
        </svg>
      </button>
                    <h5 className="text-[#1A181E] font-medium text-xl">Payouts</h5>
                    <div className="flex items-center gap-[6px] text-[#4D4D4D]">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="text-sm"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
                        </svg>
                        <p className="hidden sm:block text-xs">How it works</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 sm:py-[9px] w-[140px] bg-[#F2F2F2] text-[#808080] rounded sm:flex-grow">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
                    </svg>
                    <input type="text" placeholder="Search features, tutorials, etc." className="bg-transparent outline-none w-full" />
                </div>
                <div className="flex gap-2 justify-end sm:flex-grow">
                    <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-2 sm:flex w-8 sm:w-10 sm:h-10 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

                    </button>
                    <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-1 sm:w-10 sm:h-10 flex items-center justify-center">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 320 512"
                            className="text-2xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                        </svg>
                    </button>
                </div>
            </header>
            <main className="p-3 sm:p-8 w-full gap-8 flex flex-col">
                <section className="flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <h5 className="font-medium text-xl">Overview</h5>
                        <button className="flex items-center gap-3 border rounded px-[14px] py-[6px] bg-white text-[#4D4D4D]">
                            This Month
                            {/* Dropdown icon here */}
                        </button>
                    </div>
                    <div className="flex gap-5 flex-wrap">
                        <PayoutCard 
                            title="Next Payout" 
                            amount="₹2,312.23" 
                            orders="23" 
                            nextPayment="Today, 4:00PM" 
                        />
                        <PayoutCard 
                            title="Amount Pending" 
                            amount="₹92,312.20" 
                            orders="13" 
                        />
                        <PayoutCard 
                            title="Amount Processed" 
                            amount="₹132,000.00" 
                            orders="15" 
                        />
                    </div>
                </section>
                {/* Add more sections or components as needed */}
            </main>
        </div>
    );
};

export default Payouts;
