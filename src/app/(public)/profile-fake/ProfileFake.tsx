'use client'
import {PAGES} from "@/config/pages.config";
import {useRouter} from "next/navigation";

const ProfileFake = () => {
  const router = useRouter()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Profile Fake
      </h1>
      <button className="cursor-pointer" onClick={() => router.push(PAGES.HOME)}>Go to Home</button>
    </div>
  );
};

export default ProfileFake;