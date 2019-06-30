const apiGetProfile = async () => {
  return new Promise(resolve => {
    const ret = {
      name: "Eric",
      time: new Date("2000-7-1").toISOString()
    };
    console.log("apiGetProfile:", ret);
    resolve(ret);
  });
};

export default apiGetProfile;
