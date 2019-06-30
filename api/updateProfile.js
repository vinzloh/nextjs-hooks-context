const apiUpdateProfile = async profile => {
  return new Promise((resolve, reject) => {
    const isLoh = profile.name.includes("Loh");
    if (isLoh) {
      console.log("api - Profile updated");
      resolve({
        status: true,
        data: {
          name: profile.name,
          time: new Date().toISOString()
        }
      });
    } else {
      reject({
        status: false,
        message: "Not authorized"
      });
    }
  });
};

export default apiUpdateProfile;
