import Explore from "@/app/(public)/explore/Explore";
import {Suspense} from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Explore'
}

const ExplorePage = () => {
  return (
    <Suspense>
      <Explore />
    </Suspense>
  )
};

export default ExplorePage;