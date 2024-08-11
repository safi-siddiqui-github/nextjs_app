"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { ClerkProvider } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    const pathname = usePathname();

    return (

        <ClerkProvider
         afterSignOutUrl={`/linkedin`}
        >
            <div className="flex flex-col">

                <div className="flex px-7 items-center pt-3 justify-between flex-wrap gap-5">

                    <div className="flex items-center gap-5">

                        <Link href={`/linkedin`} className="bg-sky-600 p-2 rounded">
                            <svg className="size-4 text-white" fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_801_"> <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path> <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path> <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path> </g> </g></svg>
                        </Link>

                        <div className="flex px-4 py-1.5 bg-sky-100/75 gap-2 text-gray-500 rounded items-center">
                            <svg className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>

                            <input type="text" placeholder="Search" className="outline-none bg-transparent w-60" />
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-400">

                        <Link href={`/linkedin`} className="flex flex-col items-center border-b-2 py-1 px-3 text-black border-current">
                            <svg className="size-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 20V11H3L12 5L21 11H17.5V20H14.5V16.5C14.5 15.6716 13.8284 15 13 15H11C10.1716 15 9.5 15.6716 9.5 16.5V20H6.5Z" fill="#000000" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            <h2 className="font-medium text-sm">Home</h2>
                        </Link>

                        <Link href={`/linkedin`} className="flex flex-col items-center border-b-2 py-1 px-3 border-white hover:border-current hover:text-black ">
                            <svg className="size-7" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="ic_fluent_people_28_filled" fill="currentColor" fillRule="nonzero"> <path d="M4,16 L15,16.001 C16.0538182,16.001 16.9181157,16.8164855 16.9945109,17.8516842 L17,18.001 L17,20.5 C16.999,24.7 12.713,26 9.5,26 C6.35126,26 2.1710504,24.75148 2.00510151,20.7485328 L2,20.5 L2,18 C2,16.9461818 2.81639669,16.0818843 3.85080841,16.0054891 L4,16 Z M17.22,16.001 L24,16 C25.0538182,16 25.9181157,16.8163967 25.9945109,17.8508084 L26,18 L26,20 C25.999,23.759 22.57,25 20,25 C18.942,25 17.741,24.785 16.691,24.275 C17.4432667,23.3808667 17.9315867,22.2428222 17.9933526,20.8112714 L18,20.5 L18,18.001 C18,17.2991818 17.7512397,16.6601736 17.3461307,16.1500909 L17.22,16.001 L24,16 L17.22,16.001 Z M9.5,3 C12.537,3 15,5.463 15,8.5 C15,11.537 12.537,14 9.5,14 C6.463,14 4,11.537 4,8.5 C4,5.463 6.463,3 9.5,3 Z M20.5,5 C22.985,5 25,7.015 25,9.5 C25,11.985 22.985,14 20.5,14 C18.015,14 16,11.985 16,9.5 C16,7.015 18.015,5 20.5,5 Z" id="people-Color"> </path> </g> </g> </g></svg>
                            <h2 className="font-medium text-sm">Network</h2>
                        </Link>

                        <Link href={`/linkedin`} className="flex flex-col items-center border-b-2 py-1 px-3 border-white hover:border-current hover:text-black">
                            <svg className="size-7" fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M27 29h-23c-1.105 0-2-0.896-2-2v-12c0 0 5.221 2.685 10 3.784v1.216c0 0.553 0.447 1 1 1h5c0.552 0 1-0.447 1-1v-1.216c4.778-1.099 10-3.784 10-3.784v12c0 1.104-0.896 2-2 2zM17 17c0.552 0 1 0.447 1 1v1c0 0.553-0.448 1-1 1h-3c-0.553 0-1-0.447-1-1v-1c0-0.553 0.447-1 1-1h3zM19 17c0-0.553-0.448-1-1-1h-5c-0.553 0-1 0.447-1 1v0.896c-4.779-1.132-10-3.896-10-3.896v-4c0-1.104 0.895-2 2-2h6v-2c0-1.104 0.896-2 2-2h7c1.104 0 2 0.896 2 2v2h6c1.104 0 2 0.896 2 2v4c0 0-5.222 2.764-10 3.896v-0.896zM19 7c0-0.553-0.448-1-1-1h-5c-0.553 0-1 0.447-1 1 0 0.552 0 1 0 1h7c0 0 0-0.448 0-1z"></path> </g></svg>
                            <h2 className="font-medium text-sm">Jobs</h2>
                        </Link>

                        <Link href={`/linkedin`} className="flex flex-col items-center border-b-2 py-1 px-3 border-white hover:border-current hover:text-black">
                            <svg className="size-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" fill="currentColor"></path> <path d="M15 12C15 12.5523 15.4477 13 16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12Z" fill="white"></path> <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" fill="white"></path> <path d="M7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12Z" fill="white"></path> </g></svg>
                            <h2 className="font-medium text-sm">Messages</h2>
                        </Link>

                        <Link href={`/linkedin`} className="flex flex-col items-center border-b-2 py-1 px-3 border-white hover:border-current hover:text-black">
                            <svg className="size-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z" fill="currentColor"></path> <path d="M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z" fill="currentColor"></path> </g></svg>
                            <h2 className="font-medium text-sm">Notification</h2>
                        </Link>

                    </div>

                    <div className="flex items-center gap-4 text-gray-400">

                        <SignedIn>
                            <div className="flex flex-col items-center">
                                <UserButton
                                    showName
                                    appearance={{
                                        elements: {
                                            userButtonBox: 'flex flex-col-reverse gap-1 pr-2',
                                            avatarBox: 'w-8 h-8',
                                        }
                                    }} />
                            </div>
                        </SignedIn>

                        <SignedOut>
                            <div className="flex flex-col items-center font-medium text-sm">
                                <svg className="size-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                <SignInButton />
                            </div>
                        </SignedOut>

                        <button className="flex flex-col items-center">
                            <svg className="size-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 4C7 5.38071 5.88071 6.5 4.5 6.5C3.11929 6.5 2 5.38071 2 4C2 2.61929 3.11929 1.5 4.5 1.5C5.88071 1.5 7 2.61929 7 4Z" fill="currentColor"></path> <path d="M14.5 4C14.5 5.38071 13.3807 6.5 12 6.5C10.6193 6.5 9.5 5.38071 9.5 4C9.5 2.61929 10.6193 1.5 12 1.5C13.3807 1.5 14.5 2.61929 14.5 4Z" fill="currentColor"></path> <path d="M19.5 6.5C20.8807 6.5 22 5.38071 22 4C22 2.61929 20.8807 1.5 19.5 1.5C18.1193 1.5 17 2.61929 17 4C17 5.38071 18.1193 6.5 19.5 6.5Z" fill="currentColor"></path> <path d="M7 12C7 13.3807 5.88071 14.5 4.5 14.5C3.11929 14.5 2 13.3807 2 12C2 10.6193 3.11929 9.5 4.5 9.5C5.88071 9.5 7 10.6193 7 12Z" fill="currentColor"></path> <path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill="currentColor"></path> <path d="M22 12C22 13.3807 20.8807 14.5 19.5 14.5C18.1193 14.5 17 13.3807 17 12C17 10.6193 18.1193 9.5 19.5 9.5C20.8807 9.5 22 10.6193 22 12Z" fill="currentColor"></path> <path d="M4.5 22.5C5.88071 22.5 7 21.3807 7 20C7 18.6193 5.88071 17.5 4.5 17.5C3.11929 17.5 2 18.6193 2 20C2 21.3807 3.11929 22.5 4.5 22.5Z" fill="currentColor"></path> <path d="M14.5 20C14.5 21.3807 13.3807 22.5 12 22.5C10.6193 22.5 9.5 21.3807 9.5 20C9.5 18.6193 10.6193 17.5 12 17.5C13.3807 17.5 14.5 18.6193 14.5 20Z" fill="currentColor"></path> <path d="M19.5 22.5C20.8807 22.5 22 21.3807 22 20C22 18.6193 20.8807 17.5 19.5 17.5C18.1193 17.5 17 18.6193 17 20C17 21.3807 18.1193 22.5 19.5 22.5Z" fill="currentColor"></path> </g></svg>

                            <div className="flex items-end">
                                <h2 className="font-medium text-sm">Business</h2>
                                <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 9L12 15L18 9M12 9H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>
                        </button>

                        <Link href={`/linkedin`} className="flex flex-col items-center">
                            <svg className="size-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.42229 20.6181C10.1779 21.5395 11.0557 22.0001 12 22.0001V12.0001L2.63802 7.07275C2.62423 7.09491 2.6107 7.11727 2.5974 7.13986C2 8.15436 2 9.41678 2 11.9416V12.0586C2 14.5834 2 15.8459 2.5974 16.8604C3.19479 17.8749 4.27063 18.4395 6.42229 19.5686L8.42229 20.6181Z" fill="#1C274C"></path> <path opacity="0.7" d="M17.5774 4.43152L15.5774 3.38197C13.8218 2.46066 12.944 2 11.9997 2C11.0554 2 10.1776 2.46066 8.42197 3.38197L6.42197 4.43152C4.31821 5.53552 3.24291 6.09982 2.6377 7.07264L11.9997 12L21.3617 7.07264C20.7564 6.09982 19.6811 5.53552 17.5774 4.43152Z" fill="#1C274C"></path> <path opacity="0.5" d="M21.4026 7.13986C21.3893 7.11727 21.3758 7.09491 21.362 7.07275L12 12.0001V22.0001C12.9443 22.0001 13.8221 21.5395 15.5777 20.6181L17.5777 19.5686C19.7294 18.4395 20.8052 17.8749 21.4026 16.8604C22 15.8459 22 14.5834 22 12.0586V11.9416C22 9.41678 22 8.15436 21.4026 7.13986Z" fill="#1C274C"></path> </g></svg>
                            <h2 className="font-medium text-sm">Premium</h2>
                        </Link>

                    </div>

                </div>

                <main className="bg-neutral-200">
                    {children}
                </main>

            </div>
        </ClerkProvider >

    )
}