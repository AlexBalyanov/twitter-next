import type {PropsWithChildren} from "react";
import ShopMenu from "@/app/(public)/shop/ShopMenu";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">
        Shop
      </h1>
      <div className="bg-black py-1">
        <ShopMenu />
      </div>
      {children}
    </div>
  )
}