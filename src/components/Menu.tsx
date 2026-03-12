'use client'
import React from "react";
import {usePathname} from "next/navigation";
import {MENU} from "@/components/menu.data";
import MenuItem from "@/components/MenuItem";

const Menu = () => {
  const pathName = usePathname()

  return (
      <nav className="flex gap-6 text-white/80">
        {MENU.map((item, index) => {
          return <MenuItem key={index} menuItem={item} isActive={pathName === item.href}/>
        })}
      </nav>
  );
};

export default Menu;