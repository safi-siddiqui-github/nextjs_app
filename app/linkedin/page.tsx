import { SignedIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {

    const user = await currentUser();

    return (
        <div className="flex p-10">

            <div className="w-72 flex flex-col gap-5">

                <SignedIn>
                    <div className="bg-white rounded-xl overflow-hidden relative">

                        <div className="bg-black h-20 absolute top-0 left-0 w-full"></div>

                        <div className="flex flex-col pt-8 pb-5 z-50 items-center gap-2">
                            {
                                user?.hasImage
                                    ? (<Image src={user?.imageUrl || ''} alt="User" width="80" height="80" className="w-20 h-20 rounded-full border-2 border-white z-50" />)
                                    : (<div className="w-20 h-20 bg-black flex items-center justify-center font-medium text-sm rounded-full text-white border-2 border-white z-50">
                                        {user?.firstName?.charAt(0) || 'J'} {user?.lastName?.charAt(0) || 'D'}
                                    </div>)
                            }

                            <div className="flex flex-col text-center">
                                <p className="text-xl">{user?.fullName}</p>
                                <p className="text-sm">{user?.username || 'LinkedIn User Headline'}</p>
                            </div>
                        </div>

                        <hr />

                        <div className="flex flex-col gap-1 text-sm p-5">
                            <div className="flex items-center justify-between">
                                <p className="">Connections</p>
                                <p className="">2</p>
                            </div>

                            <Link href={`/linkedin`} className="font-medium hover:underline">Grow your connections</Link>
                        </div>

                        <hr />

                        <div className="flex flex-col gap-1 text-sm p-5">
                            <p className="">Access executive tools and insights</p>
                            <Link href={`/linkedin`} className="flex items-center gap-2 hover:underline">
                                <svg className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.42229 20.6181C10.1779 21.5395 11.0557 22.0001 12 22.0001V12.0001L2.63802 7.07275C2.62423 7.09491 2.6107 7.11727 2.5974 7.13986C2 8.15436 2 9.41678 2 11.9416V12.0586C2 14.5834 2 15.8459 2.5974 16.8604C3.19479 17.8749 4.27063 18.4395 6.42229 19.5686L8.42229 20.6181Z" fill="#1C274C"></path> <path opacity="0.7" d="M17.5774 4.43152L15.5774 3.38197C13.8218 2.46066 12.944 2 11.9997 2C11.0554 2 10.1776 2.46066 8.42197 3.38197L6.42197 4.43152C4.31821 5.53552 3.24291 6.09982 2.6377 7.07264L11.9997 12L21.3617 7.07264C20.7564 6.09982 19.6811 5.53552 17.5774 4.43152Z" fill="#1C274C"></path> <path opacity="0.5" d="M21.4026 7.13986C21.3893 7.11727 21.3758 7.09491 21.362 7.07275L12 12.0001V22.0001C12.9443 22.0001 13.8221 21.5395 15.5777 20.6181L17.5777 19.5686C19.7294 18.4395 20.8052 17.8749 21.4026 16.8604C22 15.8459 22 14.5834 22 12.0586V11.9416C22 9.41678 22 8.15436 21.4026 7.13986Z" fill="#1C274C"></path> </g></svg>
                                <h2 className="font-medium text-sm">Try Premium</h2>
                            </Link>

                        </div>

                    </div>

                    <div className="bg-white rounded-xl overflow-hidden relative p-5 flex flex-col gap-2 text-sm font-medium">
                        <div className="flex items-center justify-between">
                            <Link href={`/linkedin`} className="hover:underline">Groups</Link>
                            <p className="">5</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <Link href={`/linkedin`} className="hover:underline">Events</Link>
                            <p className="">11</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <Link href={`/linkedin`} className="hover:underline">Followed Hashtags</Link>
                            <p className="">3</p>
                        </div>

                        <hr />

                        <Link href={`/linkedin`} className="flex items-center gap-2 hover:underline w-fit">
                            <p className="">Discover More</p>
                            <svg className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0001 13.5V9M15.0001 9H10.5001M15.0001 9L9.00024 14.9999M7.20024 20H16.8002C17.9203 20 18.4804 20 18.9082 19.782C19.2845 19.5903 19.5905 19.2843 19.7823 18.908C20.0002 18.4802 20.0002 17.9201 20.0002 16.8V7.2C20.0002 6.0799 20.0002 5.51984 19.7823 5.09202C19.5905 4.71569 19.2845 4.40973 18.9082 4.21799C18.4804 4 17.9203 4 16.8002 4H7.20024C6.08014 4 5.52009 4 5.09226 4.21799C4.71594 4.40973 4.40998 4.71569 4.21823 5.09202C4.00024 5.51984 4.00024 6.07989 4.00024 7.2V16.8C4.00024 17.9201 4.00024 18.4802 4.21823 18.908C4.40998 19.2843 4.71594 19.5903 5.09226 19.782C5.52009 20 6.08014 20 7.20024 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </Link>

                    </div>

                </SignedIn>

            </div>

        </div >
    )
}