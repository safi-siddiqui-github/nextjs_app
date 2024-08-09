import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex">
            <div className="w-64 flex flex-col gap-8 px-5 pt-10 border-r h-screen">

                <div className="flex items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-black to-white"></div>
                    <h2 className="text-2xl font-semibold tracking-tight">BANK APP</h2>
                </div>

                <div className="border-2 rounded p-2 gap-2 flex items-center">
                    <svg className="w-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                    <input type="text" className="w-full outline-none" placeholder="Search here" />
                </div>

                <div className="flex flex-col gap-5">
                    <Link href={`/bank/`} className="flex items-center gap-4 text-gray-500 border-r-4 rounded">
                        <svg className="w-7 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15 18H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                        <span className="font-medium text-sm text-current">Home</span>
                    </Link>

                    <Link href={`/bank/myBanks`} className="flex items-center gap-4 text-gray-500 hover:border-r-4 rounded">
                        <svg className="w-7 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 17V17.5V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M12 6V6.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                        <span className="font-medium text-sm text-current">My Banks</span>
                    </Link>
                </div>

            </div>

            <div className="flex-1 scrollbar-y overflow-y-auto h-screen">
                {children}
            </div>

            <div className="w-96 flex flex-col gap-8  h-screen overflow-y-auto scrollbar-y">

                <div className="flex flex-col relative gap-16">
                    <div className="h-32 bg-gradient-to-br from-gray-950 via-gray-700 to-gray-950"></div>

                    <Image src={`/123`} alt="user-pic" width={`112`} height={`112`} className="w-28 h-28 rounded-full bg-black border-4 border-white absolute top-16 self-center shadow" />

                    <div className="flex flex-col gap-1 text-center">
                        <h2 className="text-3xl font-medium">John Doe</h2>
                        <p className="text-gray-500">johndoe@gmail.com</p>
                    </div>
                </div>

                <div className="flex flex-col gap-8 p-5">
                    <div className="flex items-center justify-between tracking-tight">
                        <p className="font-medium">My Banks</p>

                        <button className="flex items-center gap-1 text-gray-500">
                            <svg className="w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            <span className="text-sm">Add Bank</span>
                        </button>
                    </div>

                    <div className="flex flex-col relative h-56">
                        <div className="w-10/12 flex rounded-2xl h-44 overflow-hidden bg-gradient-to-br from-red-700 to-red-950">
                            <div className="w-3/4 flex flex-col justify-between p-5 text-white">
                                <h2 className="text-xl font-medium">Bank App Pro</h2>

                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <p className="font-medium">JOHN DOE</p>
                                        <p className="font-mono">06/24</p>
                                    </div>

                                    <div className="flex justify-between items-center font-mono font-medium">
                                        <p className="">1234</p>
                                        <p className="">1234</p>
                                        <p className="">1234</p>
                                        <p className="">1234</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/4 flex flex-col justify-between items-center text-gray-100 py-5">
                                <svg className="w-7 rotate-90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M2.8072 10.8076C7.88402 5.7308 16.1152 5.7308 21.192 10.8076C21.5825 11.1981 22.2157 11.1981 22.6062 10.8076C22.9967 10.4171 22.9967 9.78392 22.6062 9.3934C16.7483 3.53553 7.25085 3.53553 1.39299 9.3934C1.00247 9.78392 1.00247 10.4171 1.39299 10.8076C1.78352 11.1981 2.41668 11.1981 2.8072 10.8076ZM5.63563 13.636C9.15035 10.1213 14.8488 10.1213 18.3636 13.636C18.7541 14.0266 19.3872 14.0266 19.7778 13.636C20.1683 13.2455 20.1683 12.6123 19.7778 12.2218C15.482 7.92606 8.51719 7.92606 4.22142 12.2218C3.83089 12.6123 3.83089 13.2455 4.22142 13.636C4.61194 14.0266 5.24511 14.0266 5.63563 13.636ZM8.46406 16.4645C10.4167 14.5118 13.5825 14.5118 15.5351 16.4645C15.9257 16.855 16.5588 16.855 16.9493 16.4645C17.3399 16.0739 17.3399 15.4408 16.9493 15.0503C14.2157 12.3166 9.78351 12.3166 7.04984 15.0503C6.65932 15.4408 6.65932 16.0739 7.04984 16.4645C7.44037 16.855 8.07353 16.855 8.46406 16.4645ZM9.8781 17.8787C11.0497 16.7071 12.9492 16.7071 14.1207 17.8787C14.5113 18.2692 14.5113 18.9024 14.1207 19.2929L12.7065 20.7071C12.316 21.0976 11.6828 21.0976 11.2923 20.7071L9.8781 19.2929C9.48757 18.9024 9.48757 18.2692 9.8781 17.8787Z" fill="currentColor"></path> </g></svg>

                                <svg className="w-9" fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>visa</title> <path d="M15.854 11.329l-2.003 9.367h-2.424l2.006-9.367zM26.051 17.377l1.275-3.518 0.735 3.518zM28.754 20.696h2.242l-1.956-9.367h-2.069c-0.003-0-0.007-0-0.010-0-0.459 0-0.853 0.281-1.019 0.68l-0.003 0.007-3.635 8.68h2.544l0.506-1.4h3.109zM22.429 17.638c0.010-2.473-3.419-2.609-3.395-3.714 0.008-0.336 0.327-0.694 1.027-0.785 0.13-0.013 0.28-0.021 0.432-0.021 0.711 0 1.385 0.162 1.985 0.452l-0.027-0.012 0.425-1.987c-0.673-0.261-1.452-0.413-2.266-0.416h-0.001c-2.396 0-4.081 1.275-4.096 3.098-0.015 1.348 1.203 2.099 2.122 2.549 0.945 0.459 1.262 0.754 1.257 1.163-0.006 0.63-0.752 0.906-1.45 0.917-0.032 0.001-0.071 0.001-0.109 0.001-0.871 0-1.691-0.219-2.407-0.606l0.027 0.013-0.439 2.052c0.786 0.315 1.697 0.497 2.651 0.497 0.015 0 0.030-0 0.045-0h-0.002c2.546 0 4.211-1.257 4.22-3.204zM12.391 11.329l-3.926 9.367h-2.562l-1.932-7.477c-0.037-0.364-0.26-0.668-0.57-0.82l-0.006-0.003c-0.688-0.338-1.488-0.613-2.325-0.786l-0.066-0.011 0.058-0.271h4.124c0 0 0.001 0 0.001 0 0.562 0 1.028 0.411 1.115 0.948l0.001 0.006 1.021 5.421 2.522-6.376z"></path> </g></svg>
                            </div>
                        </div>

                        <div className="w-10/12 flex rounded-2xl h-44 overflow-hidden absolute bottom-0 right-0 -z-10 bg-gradient-to-br from-blue-700 to-blue-950">
                            <div className="w-3/4 flex flex-col justify-between text-white p-5">
                                <h2 className="text-xl font-medium">Bank App Pro</h2>

                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <p className="font-medium">JOHN DOE</p>
                                        <p className="font-mono">06/24</p>
                                    </div>

                                    <div className="flex justify-between items-center font-mono font-medium">
                                        <p className="">1234</p>
                                        <p className="">1234</p>
                                        <p className="">1234</p>
                                        <p className="">1234</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/4 flex flex-col justify-between items-center text-gray-100 py-5">
                                <svg className="w-7 rotate-90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M2.8072 10.8076C7.88402 5.7308 16.1152 5.7308 21.192 10.8076C21.5825 11.1981 22.2157 11.1981 22.6062 10.8076C22.9967 10.4171 22.9967 9.78392 22.6062 9.3934C16.7483 3.53553 7.25085 3.53553 1.39299 9.3934C1.00247 9.78392 1.00247 10.4171 1.39299 10.8076C1.78352 11.1981 2.41668 11.1981 2.8072 10.8076ZM5.63563 13.636C9.15035 10.1213 14.8488 10.1213 18.3636 13.636C18.7541 14.0266 19.3872 14.0266 19.7778 13.636C20.1683 13.2455 20.1683 12.6123 19.7778 12.2218C15.482 7.92606 8.51719 7.92606 4.22142 12.2218C3.83089 12.6123 3.83089 13.2455 4.22142 13.636C4.61194 14.0266 5.24511 14.0266 5.63563 13.636ZM8.46406 16.4645C10.4167 14.5118 13.5825 14.5118 15.5351 16.4645C15.9257 16.855 16.5588 16.855 16.9493 16.4645C17.3399 16.0739 17.3399 15.4408 16.9493 15.0503C14.2157 12.3166 9.78351 12.3166 7.04984 15.0503C6.65932 15.4408 6.65932 16.0739 7.04984 16.4645C7.44037 16.855 8.07353 16.855 8.46406 16.4645ZM9.8781 17.8787C11.0497 16.7071 12.9492 16.7071 14.1207 17.8787C14.5113 18.2692 14.5113 18.9024 14.1207 19.2929L12.7065 20.7071C12.316 21.0976 11.6828 21.0976 11.2923 20.7071L9.8781 19.2929C9.48757 18.9024 9.48757 18.2692 9.8781 17.8787Z" fill="currentColor"></path> </g></svg>

                                <svg className="size-9" xmlns="http://www.w3.org/2000/svg" width="2.11676in" height="1.5in" viewBox="0 0 152.407 108">
                                    <g>
                                        <rect width="152.407" height="108" fill="none" />
                                        <g>
                                            <rect x="60.4117" y="25.6968" width="31.5" height="56.6064" fill="#ff5f00" />
                                            <path d="M382.20839,306a35.9375,35.9375,0,0,1,13.7499-28.3032,36,36,0,1,0,0,56.6064A35.938,35.938,0,0,1,382.20839,306Z" transform="translate(-319.79649 -252)" fill="#eb001b" />
                                            <path d="M454.20349,306a35.99867,35.99867,0,0,1-58.2452,28.3032,36.00518,36.00518,0,0,0,0-56.6064A35.99867,35.99867,0,0,1,454.20349,306Z" transform="translate(-319.79649 -252)" fill="#f79e1b" />
                                            <path d="M450.76889,328.3077v-1.1589h.4673v-.2361h-1.1901v.2361h.4675v1.1589Zm2.3105,0v-1.3973h-.3648l-.41959.9611-.41971-.9611h-.365v1.3973h.2576v-1.054l.3935.9087h.2671l.39351-.911v1.0563Z" transform="translate(-319.79649 -252)" fill="#f79e1b" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="flex flex-col gap-8 p-5">
                    <div className="flex items-center justify-between tracking-tight">
                        <p className="font-medium">My Budgets</p>

                        <button className="flex items-center text-gray-500">
                            <svg className="w-4 text-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="currentColor"></path></g></svg>
                            <span className="text-sm">Menu</span>
                        </button>
                    </div>

                    <div className="flex flex-col gap-5 mb-10">

                        <div className="flex items-center bg-blue-50 py-3 px-4 rounded-lg gap-5">
                            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-200/75">
                                <svg className="size-6 text-blue-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 21H17M6.2 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V13.8C3 14.9201 3 15.4802 3.21799 15.908C3.40973 16.2843 3.71569 16.5903 4.09202 16.782C4.51984 17 5.07989 17 6.2 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>

                            <div className="flex flex-col gap-1.5 flex-1">
                                <div className="flex items-center justify-between text-blue-700">
                                    <p className="font-medium">Subscriptions</p>
                                    <p className="tracking-tighter">
                                        <span className="font-mono lining-nums">$25</span> left
                                    </p>
                                </div>
                                <div className="flex flex-col rounded-full overflow-hidden relative">
                                    <div className="bg-blue-200 h-2"></div>
                                    <div className="absolute top-0 bg-blue-700 h-2 w-2/6"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center bg-red-50 py-3 px-4 rounded-lg gap-5">
                            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-red-200/75">
                                <svg className="size-6 text-red-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M9.1709 15C9.58273 16.1652 10.694 17 12.0002 17C13.3064 17 14.4177 16.1652 14.8295 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20.2235 12.5257C19.6382 9.40452 19.3456 7.84393 18.2347 6.92196C17.1238 6 15.5361 6 12.3605 6H11.6393C8.46374 6 6.87596 6 5.76506 6.92196C4.65416 7.84393 4.36155 9.40452 3.77633 12.5257C2.9534 16.9146 2.54194 19.1091 3.74157 20.5545C4.94119 22 7.17389 22 11.6393 22H12.3605C16.8259 22 19.0586 22 20.2582 20.5545C20.9542 19.7159 21.1079 18.6252 20.9536 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                            </div>

                            <div className="flex flex-col gap-1.5 flex-1">
                                <div className="flex items-center justify-between text-red-700">
                                    <p className="font-medium">Food And Drinks</p>
                                    <p className="tracking-tighter">
                                        <span className="font-mono lining-nums">$120</span> left
                                    </p>
                                </div>
                                <div className="flex flex-col rounded-full overflow-hidden relative">
                                    <div className="bg-red-200 h-2"></div>
                                    <div className="absolute top-0 bg-red-700 h-2 w-4/6"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center bg-green-50 py-3 px-4 rounded-lg gap-5">
                            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-green-200/75">
                                <svg className="size-6 text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M9.1709 15C9.58273 16.1652 10.694 17 12.0002 17C13.3064 17 14.4177 16.1652 14.8295 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20.2235 12.5257C19.6382 9.40452 19.3456 7.84393 18.2347 6.92196C17.1238 6 15.5361 6 12.3605 6H11.6393C8.46374 6 6.87596 6 5.76506 6.92196C4.65416 7.84393 4.36155 9.40452 3.77633 12.5257C2.9534 16.9146 2.54194 19.1091 3.74157 20.5545C4.94119 22 7.17389 22 11.6393 22H12.3605C16.8259 22 19.0586 22 20.2582 20.5545C20.9542 19.7159 21.1079 18.6252 20.9536 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                            </div>

                            <div className="flex flex-col gap-1.5 flex-1">
                                <div className="flex items-center justify-between text-green-700">
                                    <p className="font-medium">Savings</p>
                                    <p className="tracking-tighter">
                                        <span className="font-mono lining-nums">$50</span> left
                                    </p>
                                </div>
                                <div className="flex flex-col rounded-full overflow-hidden relative">
                                    <div className="bg-green-200 h-2"></div>
                                    <div className="absolute top-0 bg-green-700 h-2 w-3/6"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}