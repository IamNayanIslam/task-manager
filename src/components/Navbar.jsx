// import Button from "./Button";
import { CgDarkMode } from "react-icons/cg";
export const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav
      className={
        darkMode
          ? "flex justify-between bg-[#222831] text-white px-3 py-4"
          : "flex justify-between bg-green-800 text-white px-3 py-4"
      }
    >
      <div className="logo">
        <h1 className="text-lg font-bold cursor-pointer">Task Tracker</h1>
      </div>
      <div>
        <CgDarkMode
          size={36}
          className="cursor-pointer"
          onClick={toggleDarkMode}
        />
      </div>
    </nav>
  );
};
