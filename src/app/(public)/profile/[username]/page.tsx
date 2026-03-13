import Profile from "@/app/(public)/profile/[username]/Profile";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Profile'
}

const ProfilePage = () => {
  return <Profile />
};

export default ProfilePage;