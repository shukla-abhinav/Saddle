import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";


export const sidebarData = [
    {
        _id: 1,
        key: "home",
        name: "Home", 
        image: <AiOutlineHome />,
        path: "/dashboard"
    },
    {
        _id: 2,
        key: "bookings",
        name: "Bookings", 
        image: <BiPhoneCall />,
        path: "/dashboard/bookings"
    },
    {
        _id: 3,
        key: "testimonials",
        name: "Testimonials", 
        image: <CiHeart />,
        path: "/dashboard/testimonials"
    },
    {
        _id: 4,
        key: "calendar",
        name: "Calendar", 
        image: <MdCalendarMonth />,
        path: "/dashboard/calendar"
    },
    {
        _id: 5,
        key: "profile",
        name: "Profile", 
        image: <FiUser />,
        path: "/dashboard/profile"
    },
    {
        _id: 6,
        key: "whatsnew",
        name: "What's New", 
        image: <IoMdNotificationsOutline />,
        path: "/dashboard/whatsnew"
    }
]