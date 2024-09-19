import { Outlet } from "react-router-dom";
import Sidebar from "../Admin/LayOut/SideBar/SideBar";
import NavBar from "../Admin/LayOut/NavBar/NavBar";

function AdminPage() {
  return (
    <div className="w-full min-h-full flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <NavBar />
        <div className="flex-grow p-4 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminPage