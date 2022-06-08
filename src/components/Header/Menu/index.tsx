import React from "react";

const Menu = () => {
  return (
    <ul className="text-white centered">
      <li className="px-2 py-1 my-1 hover:bg-slate-200 focus:opacity-50">
        Produtos
      </li>
      <li className="px-2 py-1 my-1 hover:bg-slate-200 focus:opacity-50">
        Contato
      </li>
      <li className="px-2 py-1 my-1 hover:bg-slate-100">Login</li>
    </ul>
  );
};

export default Menu;
