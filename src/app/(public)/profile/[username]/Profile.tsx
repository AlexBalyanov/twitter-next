'use client'
import {useParams} from "next/navigation";

const Profile = () => {
  const params = useParams<{username: string}>()

  return (
    <div>
      Profile @{params.username}
    </div>
  );
};

export default Profile;