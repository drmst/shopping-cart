import React from "react";
import CardIcon from "./CardIcon";


const Header = ({cart}) => {
  return (
    <div className="flex justify-between it mb-6">
      <h1 className="text-3xl font-semibold">
        React ve Tailwind Css sepet Uygulaması
      </h1>
      <CardIcon cart={cart}/>
    </div>
  );
};

export default Header;
