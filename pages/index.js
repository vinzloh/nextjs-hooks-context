import axios from "axios";

import apiGetProfile from "../api/getProfile";
import { UserProfile } from "../contexts/UserProfile";
import ProfileDetails from "../components/ProfileDetails";
import EditProfile from "../components/EditProfile";

function ProfilePage({ profile }) {
  // console.log("ProfilePage axios defs:", axios.defaults.headers.common);
  console.log("ProfilePage profile:", profile);
  return (
    <UserProfile value={profile}>
      <ProfileDetails />
      <EditProfile />
    </UserProfile>
  );
}

ProfilePage.getInitialProps = async ctx => {
  // console.log("getInitialProps axios defs:", axios.defaults.headers.common);
  return { profile: await apiGetProfile() };
};

export default ProfilePage;
