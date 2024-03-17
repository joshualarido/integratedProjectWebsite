import { GoHome } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineExperiment } from "react-icons/ai";
import { MdMusicVideo } from "react-icons/md";
import { PiCross } from "react-icons/pi";

import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-64 flex-col bg-gray-700 p-4
                        shadow-2xl float-left">
            <div className="my-2 mb-4 px-4">
                <h1 className="text-xl text-left text-white
                            font-redhat font-extrabold mb-1">Integrated Project</h1>
                <h2 className="text-sm text-gray-300 font-redhat">Group 3, 12 St. Caecilia</h2>
            </div>
            <div className="mb-6">
                <a href="/" className="nav-item"><SideBarIcon icon={<GoHome />} />Home</a>
                <a href="/planning" className="nav-item"><SideBarIcon icon={<CiCalendar />} />Planning</a>
            </div>
            <div>
                <h3 className="my-2 mb-2 px-4 font-redhat text-gray-400 text-xs">Projects</h3>
                <a href="/game" className="nav-item"><SideBarIcon icon={<IoGameControllerOutline  />} />Construct 2 Game</a>
                <a href="/" className="nav-item"><SideBarIcon icon={<AiOutlineExperiment />} />Tempeh Production</a>
                <a href="/" className="nav-item"><SideBarIcon icon={<MdMusicVideo  />} />Dance Video</a>
                <a href="/" className="nav-item"><SideBarIcon icon={<PiCross />} />Religious Ceremony</a>
            </div>
        </div>
    );
};

const SideBarIcon = ({icon}) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);

export default SideBar;