import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
   const links = [
      {
         title: "Home",
         to: "home",
      },
      {
         title: "Products",
         to: "products",
      },
     
   ];
   return (
      <div>
         {links.map((e, i) => {
            return (
               <Link className="links" key={i} to={e.to}>
                  <div style={{margin:"2px",gap:"5px"}}>{e.title}</div>
               </Link>
            );
         })}
      </div>
   );
};

