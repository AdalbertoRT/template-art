import React, { useState } from "react";
import Brand from "./Brand";
import MenuMobile from "./Menu/mobile";
import menuIcon from "./Menu/menu.svg";
import Menu from "./Menu";

interface IHeader {
  background: string;
  color: string;
}

const Header: React.FC<IHeader> = ({ background, color, ...props }) => {
  const [menu, setMenu] = useState(false);
  return (
    <header
      className={`px-2 absolute left-0 top-0 w-full ${
        menu ?? "h-48"
      } ${background}`}
    >
      <div
        className={`headerInner container between mx-auto h-12 overflow-hidden ${color}`}
      >
        <div className="h-full centered">
          <Brand />
        </div>

        <div className="menu hidden md:flex">
          <Menu />
        </div>

        <div className="menuMobileIcon centered md:hidden">
          <button onClick={() => setMenu(!menu)}>
            <img
              src={menuIcon}
              className={`origin-center ${
                menu && "rotate-90"
              } transition-all ease duration-300`}
            />
          </button>
        </div>
      </div>

      <div
        className={`menuMobile w-full overflow-hidden ${
          menu ? "h-32" : "h-0"
        } transition-all ease-in-out duration-300 md:hidden`}
      >
        <MenuMobile show={menu} />
      </div>
    </header>
  );
};

export default Header;
