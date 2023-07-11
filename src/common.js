export const getToken = () => {
    var email = sessionStorage.getItem("token");
    // console.log("email",email)
    if (email == null) {
      return false;
    } else {
      return true;
    }
  };
  

  const Profile = "https://xsgames.co/randomusers/avatar.php?g=male";
export default Profile;
 
  