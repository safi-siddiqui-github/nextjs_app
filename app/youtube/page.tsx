import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars, faBell, faCamera, faCircleUser, faMicrophone, faSearch, faUser, faUserAlt, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Page() {

    const tags = ['All', 'Youtube', 'Upwork', 'Instagram', 'Next JS', 'Tailwind CSS', 'Supabase'];


    return (
        <main className="flex flex-col">
            <header className="flex p-4 justify-between border-b">
                <div className="flex gap-5">
                    <FontAwesomeIcon icon={faBars} className="w-6 hover:text-red-600 cursor-pointer" />

                    <Link href="/youtube">
                        <div className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faYoutube} className="w-10 text-red-600" />
                            <h1 className="text-lg font-medium">Youtube</h1>
                        </div>
                    </Link>
                </div>
                <div className="flex gap-3">
                    <FontAwesomeIcon icon={faSearch} className="w-5" />
                    <FontAwesomeIcon icon={faMicrophone} className="w-5" />
                    <FontAwesomeIcon icon={faVideoCamera} className="w-6" />
                    <FontAwesomeIcon icon={faBell} className="w-5" />
                    <FontAwesomeIcon icon={faCircleUser} className="w-6" />
                </div>
            </header>

            <section className="flex gap-3 px-5 pt-5 pb-3 overflow-x-scroll scrollbar">

                {tags.map((each, index) => (
                    <div key={index} className="px-3 py-1 font-medium border border-slate-500 rounded cursor-pointer hover:border-black min-w-max">{each}</div>
                ))}

            </section>

        </main>
    )
}