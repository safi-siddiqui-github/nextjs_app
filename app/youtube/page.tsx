import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Page() {

    return (
        <div>
            <h2 className="text-lg">
                Youtube Page
            </h2>
            <FontAwesomeIcon icon={faYoutube} className="w-10"/>

        </div>
    )
}