import Link from "next/link";
import type {IMenuItem} from "@/components/menu.data";

interface IProps {
  menuItem: IMenuItem;
  isActive: boolean;
}

const MenuItem = ({menuItem, isActive}: IProps) => {
  return (
    <Link className={isActive ? 'text-white' : 'text-white/80'} href={menuItem.href}>
      {menuItem.name}
    </Link>
  );
};

export default MenuItem;