import type {Metadata} from "next";
import ProfileFake from "@/app/(public)/profile-fake/ProfileFake";

export const metadata: Metadata = {
  title: 'ProfileFake'
}

const ProfileFakePage = () => {

  return <ProfileFake />;
};

export default ProfileFakePage;