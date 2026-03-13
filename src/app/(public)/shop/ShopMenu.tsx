'use client'
import MenuItem from "@/components/MenuItem";
import {PAGES} from "@/config/pages.config";
import {usePathname} from "next/navigation";

const ShopMenu = () => {
  const pathName = usePathname()

  return (
    <nav className="flex items-center gap-4 mb-5">
      <MenuItem menuItem={{href: PAGES.SHOP, name: 'SSR'}} isActive={pathName === PAGES.SHOP} />
      <MenuItem menuItem={{href: PAGES.SSG, name: 'SSG'}} isActive={pathName === PAGES.SSG} />
      <MenuItem menuItem={{href: PAGES.ISR, name: 'ISR'}} isActive={pathName === PAGES.ISR} />
    </nav>
  );
};

export default ShopMenu;