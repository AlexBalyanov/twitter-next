import type {ITweet} from "@/shared/types/tweet.interface";
import Image from "next/image";
import Link from "next/link";
import {PAGES} from "@/config/pages.config";

const Tweet = (props: ITweet) => {
  const { text, author } = props

  return (
    <div className="border border-white/10 rounded-xl p-4 bg-black text-white shadow-md">
      <div className="flex items-center gap-3 mb-2">
        <Image
          src="/xlogo.svg"
          alt="x logo"
          width={24}
          height={24}
        />
        <Link href={PAGES.PROFILE(author)} className="font-semibold">@{author}</Link>
      </div>
      <p className="text-white/90">{text}</p>
    </div>
  )
}

export default Tweet