import { useContext } from "react";
import { UserProfileContext, withUserProfile } from "../contexts/UserProfile";

function EditProfile(props) {
  // const { profile = {}, message, setName, apiUpdateProfile } = useContext(
  //   UserProfileContext
  // );
  const { profile = {}, message, setName, apiUpdateProfile } = props;
  const onClickUpdateProfile = () => apiUpdateProfile(true);
  const onChangeName = e => setName(e.target.value);

  return (
    <>
      <h3>Edit Profile {profile.name}</h3>
      <div>
        <input type="text" onChange={onChangeName} value={profile.name || ""} />
        <button onClick={onClickUpdateProfile}>Update</button>
      </div>
      <div>{message}</div>
    </>
  );
}

export default withUserProfile(EditProfile);
