import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

export default function DashboardLayout({ children, activeMenu }) {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className="flex">
          <div className="max-lg:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div className="grow px-5">{children}</div>
        </div>
      )}
    </div>
  );
}
