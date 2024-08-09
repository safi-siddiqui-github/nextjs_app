"use client";

import Link from "next/link";
import { ArcElement, Chart as ChartJS, Legend, Tooltip, } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function Page() {

    ChartJS.register(ArcElement, Tooltip, Legend)

    const doughnutData = {
        labels: [
            'Blue',
            'Red',
            'Green'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                '#3b82f6',
                '#ef4444',
                '#22c55e',
            ],
            hoverOffset: 4
        }],

    }

    return (
        <div className="flex flex-col px-5 py-10 gap-10">

            <div className="flex flex-col tracking-tight gap-1">
                <h2 className="text-3xl">Welcome, <span className="font-medium">John</span></h2>
                <p className="">Access & manage your account and transactions efficiently.</p>
            </div>

            <div className="flex p-5 border shadow rounded-lg gap-5">
                <div className="h-72">
                    <Doughnut data={doughnutData} />
                </div>

                <div className="flex flex-col gap-5 w-full">

                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Bank Accounts: 2</p>

                        <button className="flex items-center gap-2 text-blue-500">
                            <svg className="w-5 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            <span className="tracking-tight">Add Bank</span>
                        </button>
                    </div>


                    <div className="flex flex-col gap-1">
                        <p className="text-gray-500">Total Current Balance</p>
                        <p className="text-2xl font-medium">$2,799.54</p>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-5">

                <div className="flex items-center justify-between">
                    <p className="text-2xl">Recent Transactions</p>
                    <button className="border-2 text-gray-500 rounded px-4 py-2 text-sm font-medium">View All</button>
                </div>

                <div className="flex gap-5 items-center border-b text-gray-500">
                    <button className="font-medium underline underline-offset-4 text-black">Chase Bank</button>
                    <button className="hover:underline underline-offset-4 hover:text-black">Bank Of USA</button>
                    <button className="hover:underline underline-offset-4 hover:text-black">First Women Bank</button>
                </div>

                <div className="p-5 bg-black/5 flex gap-5 rounded-lg">
                    <div className="bg-black rounded-full text-white w-10 h-10 flex items-center justify-center">CB</div>

                    <div className="flex flex-col flex-1">
                        <div className="flex items-center justify-between">
                            <p className="text-xl font-medium">Chase Bank</p>
                            <div className="bg-green-100 rounded-full px-3 py-1 font-medium text-green-500">savings</div>
                        </div>
                        <p className="font-medium">$785.46</p>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-5">

                <div className="flex font-medium tracking-tight px-4 py-2 gap-2 bg-black/5 rounded">
                    <h3 className="w-3/12">Transaction</h3>
                    <h3 className="w-2/12">Amount</h3>
                    <h3 className="w-2/12">Status</h3>
                    <h3 className="w-2/12">Date</h3>
                    <h3 className="w-3/12">Category</h3>
                </div>

                <div className="flex font-medium px-4 gap-2">
                    <div className="w-3/12 flex items-center gap-2">
                        <div className="bg-green-500 w-10 h-10 rounded-full"></div>
                        <span className="font-medium">Figma</span>
                    </div>
                    
                    <p className="w-2/12 text-red-500">- $178.56</p>

                    <div className="w-2/12">
                        <div className="bg-slate-100 w-fit flex items-center rounded-full pr-3 pl-2 py-1 gap-1">
                            <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                            <p className="font-medium text-sm text-slate-500">Processing</p>
                        </div>
                    </div>

                    <p className="w-2/12 text-gray-500">01/05/2005</p>

                    <div className="w-3/12">
                        <div className="border-2 border-blue-500 w-fit flex items-center rounded-full pr-3 pl-2 py-1 gap-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <p className="font-medium text-sm text-blue-500">Subscriptions</p>
                        </div>
                    </div>
                </div>

                <div className="flex font-medium px-4 gap-2">
                    <div className="w-3/12 flex items-center gap-2">
                        <div className="bg-red-500 w-10 h-10 rounded-full"></div>
                        <span className="font-medium">Monitor</span>
                    </div>
                    
                    <p className="w-2/12 text-green-500">+ $158.44</p>

                    <div className="w-2/12">
                        <div className="bg-green-100 w-fit flex items-center rounded-full pr-3 pl-2 py-1 gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <p className="font-medium text-sm text-green-500">Success</p>
                        </div>
                    </div>

                    <p className="w-2/12 text-gray-500">23/08/2005</p>

                    <div className="w-3/12">
                        <div className="border-2 border-green-500 w-fit flex items-center rounded-full pr-3 pl-2 py-1 gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <p className="font-medium text-sm text-green-500">Computer</p>
                        </div>
                    </div>
                </div>

                <div className="flex font-medium px-4 gap-2">
                    <div className="w-3/12 flex items-center gap-2">
                        <div className="bg-yellow-500 w-10 h-10 rounded-full"></div>
                        <span className="font-medium">Fresh Basket</span>
                    </div>
                    
                    <p className="w-2/12 text-green-500">+ $213.38</p>

                    <div className="w-2/12">
                        <div className="bg-red-100 w-fit flex items-center rounded-full pr-3 pl-2 py-1 gap-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <p className="font-medium text-sm text-red-500">Declined</p>
                        </div>
                    </div>

                    <p className="w-2/12 text-gray-500">12/07/2009</p>

                    <div className="w-3/12">
                        <div className="border-2 border-red-500 w-fit flex items-center rounded-full pr-3 pl-2 py-1 gap-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <p className="font-medium text-sm text-red-500">Food</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}