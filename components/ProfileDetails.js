import { useContext } from "react";
import { UserProfileContext, withUserProfile } from "../contexts/UserProfile";

function ProfileDetails(props) {
  // const { profile = {} } = useContext(UserProfileContext);
  const { profile = {} } = props;
  return (
    <>
      <div>
        Hello {profile.name}, updated: {profile.time}
      </div>
    </>
  );
}

export default withUserProfile(ProfileDetails);
// export default ProfileDetails;
