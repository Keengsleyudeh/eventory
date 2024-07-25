import { useNavigate } from "react-router-dom";
import DrawerWithNavigation from "../ui/Drawer"
import Header from "../ui/Header";

function UserHome() {
    const navigate = useNavigate();
    return <>
        <Header />
        <DrawerWithNavigation />
        <button onClick={()=>navigate("/profile")}>Profile</button>
    </>
}

export default UserHome;