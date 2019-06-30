import React, { useState, useEffect } from "react";
import apiUpdateProfile from "../api/updateProfile";
import apiGetProfile from "../api/getProfile";

function useUserProfile(props) {
  const [message, setMessage] = useState("");
  const [name, setName] = useState((props || {}).name);

  const [profile, setProfile] = useState(props);
  useEffect(() => {
    name && name !== profile.name && setProfile({ ...profile, name });
  }, [name]);

  useEffect(() => {
    !profile && apiGetProfile().then(setProfile);
  }, [profile]);

  const [willUpdateProfile, setWillUpdateProfile] = useState(false);
  useEffect(() => {
    willUpdateProfile &&
      apiUpdateProfile({ name: profile.name })
        .then(({ data }) => {
          setProfile(data);
          setMessage("Profile updated.");
        })
        .catch(({ message }) => setMessage(message))
        .finally(() => setWillUpdateProfile(false));
  }, [willUpdateProfile]);

  return { profile, setName, apiUpdateProfile: setWillUpdateProfile, message };
}

export const UserProfileContext = React.createContext();
export const UserProfile = props => (
  <UserProfileContext.Provider value={useUserProfile(props.value)}>
    {props.children}
  </UserProfileContext.Provider>
);

export const withUserProfile = Component => () => (
  <UserProfileContext.Consumer>
    {props => <Component {...props} />}
  </UserProfileContext.Consumer>
);
