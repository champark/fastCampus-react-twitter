import { BsHouse } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom"
import { MdLogout } from "react-icons/md";

export default function MenuList() {
    const navigate = useNavigate();
    return <div className="footer">
        <div className="footer__grid">
            <button type="button" onClick={() => navigate("/")}>Home</button>
            <button type="button" onClick={() => navigate("/profile")}>Profile</button>
            <button type="button" onClick={() => navigate("/")}>Logout</button>
        </div>
    </div>
}