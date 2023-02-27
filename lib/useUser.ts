export const useUser = () => {
  console.log("using useUser");
  return {
    user: {
      username: "alex",
      userId: "2345362",
      isLoggedIn: false,
    },
  };
};
