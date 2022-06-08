import React from "react";

interface IMobile {
  show: boolean;
}

const MenuMobile: React.FC<IMobile> = ({ show }) => {
  return (
    <div className={`bg-white mt-2 rounded relative`}>
      <ul className="w-full text-left text-black">
        <li className="px-2 py-1 my-1 hover:bg-slate-200 focus:opacity-50">
          Produtos
        </li>
        <li className="px-2 py-1 my-1 hover:bg-slate-200 focus:opacity-50">
          Contato
        </li>
        <hr />
        <li className="px-2 py-1 my-1 hover:bg-slate-100">Login</li>
      </ul>
    </div>
  );
};

export default MenuMobile;
